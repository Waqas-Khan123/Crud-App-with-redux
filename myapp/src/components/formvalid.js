
import * as Yup from 'yup';
export const formSchema=Yup.object({
    name:Yup.string().min(5).max(20).required("name is must"),
    age:Yup.number().min(1).max(400),
    email:Yup.string().min(10).max(20).required("email is must"),
    password:Yup.string().min(10).max(20).required("please enter a password"),
    


})