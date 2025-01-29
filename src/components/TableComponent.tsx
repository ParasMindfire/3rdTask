import React from "react"
import { useUserContext } from "../context/userContext";

const TableComponet:React.FC=()=>{

  const {person,renderUser,deleteUser} = useUserContext();

  const handleTableEdit=(index:number)=>{
    renderUser(index);
  }

  const handleTableDelete=(index:number)=>{
    deleteUser(index);
  }


  return (
    <div className="table-container">
        <table style={{border:1}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {person.length > 0 && 
                person.map((person, index) => (
                    <tr key={index}>
                        <td>{person.fullName}</td>
                        <td>{person.email}</td>
                        <td>{person.phone}</td>
                        <td>
                            <div className="tableBtn">
                            <button id="edit" onClick={()=>handleTableEdit(index)}>edit</button>
                            <button id="delete" onClick={()=>handleTableDelete(index)}>delete</button>
                            </div>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
  );
}

export default TableComponet;
