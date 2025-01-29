export interface validationContextInterface{
    validateField:(field: string, value: string)=>boolean;
    validateFormBeforeSubmit:()=>boolean;
}