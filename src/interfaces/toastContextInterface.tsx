export interface toastContextInterface {
    message:string,
    state:string,
    openToast:(message:string,state:string)=>void;
}