import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase"
import FormInput from "../form-input/form-input.component"
import "./sign-up-form.styles.scss"
import Button from "../button/button.component"

const defaultFormField = {
    displayName:"",
    email:"",
    password:"",
    confirmPassword:"",
}
const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const {displayName, email, password, confirmPassword} = formField

    console.log(formField)

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormField({...formField, [name]: value })
    }
    const resetForm = () => {
        setFormField(defaultFormField)
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        const {email, password, confirmPassword} = formField
        if(password !== confirmPassword){ 
            console.log("password doesn't match confirm password");
            return;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetForm();
            alert("User created successfully")
        }catch(err) {
            if(err.code === 'auth/email-already-in-use'){
                alert("Cannot create user, account already in use, Sign in with this email");
            } else
                console.error(err)
        }
    }
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onClick={handleSubmit}>
                <FormInput label="Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm




