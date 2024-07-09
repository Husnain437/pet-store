import * as yup from 'yup';
const PasswordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
    email: yup.string().email("please enter valid email").required('Required'),
    password: yup.string().min(5).matches(PasswordRules,{message: "Please Create a Strong Password"}).required("Required")
})

export const registerSchema = yup.object().shape({
    email: yup.string().email("please enter valid email").required('Required'),
    password: yup.string().min(5).matches(PasswordRules,{message: "Please Create a Strong Password"}).required("Required"),
    cpassword: yup.string().oneOf([yup.ref('password'), null], "Password must be match").required('Required'),
    firstname: yup.string().required('Required'),
    lastname: yup.string().required('Required'),
})