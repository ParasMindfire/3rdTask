import React from 'react'
import {useUserContext}  from '../context/userContext.tsx';
import { useValidationContext } from '../context/validationContext.tsx';
import { useToastContext } from '../context/toastContext.tsx';

const FormComponent:React.FC=()=> {

    const {initialPerson,setInitialPerson,addPerson,flag,updatePerson} = useUserContext();

    const {validateField,validateFormBeforeSubmit}=useValidationContext();

    const {openToast,message,state}=useToastContext()

    const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
        const {name,value}=e.target;
        console.log("helooo")
        setInitialPerson({...initialPerson,[name]:value});
        // validateField(name,value);
    }

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("currPerson",initialPerson);
        if(validateFormBeforeSubmit()){
            if(!flag)addPerson(initialPerson);
            else updatePerson(initialPerson);
        }else{
            openToast("Fill All The Fields","danger")
        }
        setInitialPerson({fullName:"",email:"",phone:"",password:"",gender:"",address:"",birthday:""});
    }

    const handleValidation=(e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
        const {name,value}=e.target;
        validateField(name,value);
    }


    return (
        <div className="form-container">
            {message.length>0 && 
            <div id="toast" className={`snackbar ${state==="safe"?"safe":"danger"}`}>{message}</div>}
            <form id="userForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Name:</label>
                    <input type="text" id="fullName" name="fullName" value={initialPerson.fullName} onChange={handleChange} onBlur={handleValidation}/>
                    <span id="fullName-error" className="error-message"></span>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" value={initialPerson.email} onChange={handleChange} onBlur={handleValidation}/>
                    <span id="email-error" className="error-message"></span>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" value={initialPerson.phone} onChange={handleChange} onBlur={handleValidation}/>
                    <span id="phone-error" className="error-message"></span>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" name="password" value={initialPerson.password} onChange={handleChange} onBlur={handleValidation}/>
                    <span id="password-error" className="error-message"></span>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" value={initialPerson.gender} onChange={handleChange} onBlur={handleValidation}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <span id="gender-error" className="error-message"></span>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" value={initialPerson.address} onChange={handleChange} onBlur={handleValidation}/>
                    <span id="address-error" className="error-message"></span>
                </div>
                <div className="form-group">
                    <label htmlFor="birthday">Birthday:</label>
                    <input type="date" id="birthday" name="birthday" value={initialPerson.birthday} onChange={handleChange} onBlur={handleValidation}/>
                    <span id="birthday-error" className="error-message"></span>
                </div>
                <button type="submit" id="submit" className="btn">{flag?"Update":"Submit"}</button>
            </form>
        </div>
    )
}

export default FormComponent




