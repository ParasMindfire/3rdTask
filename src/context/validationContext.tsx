import React,{createContext,useContext,ReactNode} from "react";

import { validationContextInterface } from "../interfaces/validationContextInterface";

const ValidationContext=createContext<validationContextInterface|undefined>(undefined);

export const ValidationProvider:React.FC<{children:ReactNode}>=({children})=>{

    const validationRules: { [key: string]: RegExp } = {
        fullName: /^[a-zA-Z\s]+$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        phone: /^[0-9]{10}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        gender: /^(Male|Female|Other)$/,
        address: /^.+$/,
        birthday: /^\d{4}-\d{2}-\d{2}$/
    };

    const errorMessages: { [key: string]: string } = {
        fullName: "Full name must contain only letters and spaces.",
        email: "Please enter a valid email address.",
        phone: "Phone number must be 10 digits.",
        password: "Password must contain 8 characters, including uppercase, lowercase, and a number.",
        gender: "Please select a valid gender.",
        address: "Address cannot be empty.",
        birthday: "Please enter a valid date (YYYY-MM-DD)."
    };

    const validateField=(field: string, value: string): boolean =>{
        console.log("field ",field)
        const isValid = validationRules[field]?.test(value);
        // console.log("Is Valid ? ",isValid);
        showValidationMessage(field, isValid);

        return isValid;
    }

    const showValidationMessage=(field: string, isValid: boolean): void=>{
        const errorElement = document.getElementById(`${field}-error`);
        if (errorElement) {
            if (!isValid) {
                errorElement.textContent = errorMessages[field];
            } else {
                errorElement.textContent = "";
            }
        }
    }

    const validateFormBeforeSubmit=():boolean=>{
        let allValid = true;
        for (const field in validationRules) {
            const inputElement = document.getElementById(field) as HTMLInputElement;
            if (inputElement) {
                const value = inputElement.value.trim();
                const isValid = validateField(field, value);
                if (!isValid) {
                    allValid = false;
                }
            }
            
        }
        return allValid;
    }

    return (
        <ValidationContext.Provider value={{validateField,validateFormBeforeSubmit}}>
          {children}
       </ValidationContext.Provider>
    )
}


export const useValidationContext=()=>{
    const context=useContext(ValidationContext);
    if(!context)throw new Error("useValidationContext must be used within ValidationProvider");
    return context;
}

