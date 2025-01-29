import { Dispatch, SetStateAction } from "react";
import { PersonInterface } from "./PersonInterface";

export interface userContextInterface{
    addPerson:(person:PersonInterface)=>void;
    person:PersonInterface[];
    renderUser:(index:number)=>void;
    deleteUser:(index:number)=>void;
    initialPerson:PersonInterface;
    setInitialPerson:Dispatch<SetStateAction<PersonInterface>>;
    flag:boolean;
    setFlag:Dispatch<SetStateAction<boolean>>;
    updatePerson:(person:PersonInterface)=>void;
}