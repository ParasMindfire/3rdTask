import React,{ createContext, useContext, useState ,ReactNode } from "react"
import { PersonInterface } from "../interfaces/PersonInterface"
import { userContextInterface } from "../interfaces/userProviderInterface"
import { useToastContext } from "./toastContext";


const UserContext=createContext<userContextInterface| undefined>(undefined);

export const UserProvider:React.FC<{ children : ReactNode}>=({ children })=>{
                                                                                                                                                                
  const {openToast}=useToastContext();
  
  const [flag,setFlag]=useState(false);

  const initialState: PersonInterface = {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      gender: "",
      address: "",
      birthday: "",
  };

  const [initialPerson,setInitialPerson]=useState<PersonInterface>(initialState)

  const [person,setPerson]=useState<PersonInterface[]>([]);

  const addPerson=(person:PersonInterface)=>{
    console.log("person ",person);
    openToast("Form Added Succesfully","safe");
    setPerson((prev)=>[...prev,person]);
  }

  const updatePerson=(people:PersonInterface)=>{
    setFlag(false);
    // console.log("people aya ",people);
    // console.log("persons avi ",person);
    const toEditObj=person.findIndex((pep)=>{
      return pep.email==people.email;
    })

    // console.log("persons Before edit ",person);
    person[toEditObj]=people;
    // console.log("persons after edit ",person);
    setPerson(person);
    openToast("Form Updated Succesfully","safe");

    console.log("toEdit ",toEditObj);
  }

  const renderUser=(index:number)=>{
    setInitialPerson(person[index]);
    setFlag(true);
  }

  const deleteUser=(index:number)=>{
    // person.splice(index,1);
    const newArray=person.filter((_,i)=>{
      return i!=index;
    })
    setPerson(newArray);
    openToast("Record Deleted Succesfully","safe");
    console.log("After Delete person ",newArray);
    // console.log("number row ",index);
  }

  return (
    <UserContext.Provider value={{initialPerson,setInitialPerson,person,addPerson,renderUser,deleteUser,flag,setFlag,updatePerson}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext=()=>{
    const context=useContext(UserContext);
    if(!context)throw new Error("useUserContext must be used within userProvider");
    return context;
}

