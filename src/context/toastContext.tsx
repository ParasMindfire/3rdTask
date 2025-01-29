import React,{ createContext, useContext, useState ,ReactNode } from "react"
import { toastContextInterface } from "../interfaces/toastContextInterface"


const ToastContext=createContext<toastContextInterface|undefined>(undefined)

export const ToastProvider:React.FC<{children:ReactNode}>=({children})=>{
    const [message,setMessage]=useState("");
    const [state,setState]=useState("");

    const openToast=(msg:string,ste:string)=>{
        setMessage(msg);
        setState(ste);
        setTimeout(()=>{
            setMessage("");
        },3000)
        console.log("message ",message);
        console.log("state ",state);
    }

    return (
        <ToastContext.Provider value={{message,state,openToast}}>
            {children}
        </ToastContext.Provider>
    )
}

export const useToastContext=()=>{
    const context=useContext(ToastContext);
    if(!context)throw new Error("useToastContext must be used within ToastProvider");
    return context;
}