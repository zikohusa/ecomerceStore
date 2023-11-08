import { useState } from 'react';
import Button from '../../button/button.component';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../../utils/firebase/firebase';
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss"

  
const SignInForm = () => {
    const defaultFormField = {
        email: "",
        password: ""
    }
    const [formField, setFormField] = useState(defaultFormField)
    const {email, password} = formField

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    };

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormField({...formField, [name]: value })
    }
    const resetForm = () => {
        setFormField(defaultFormField)
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        const {email, password} = formField

        try{
            await signInAuthUserWithEmailAndPassword(email, password)
            resetForm();
        }catch(err) {
            switch(err.code){
                case 'auth/user-not-found' :
                    alert("no user associated with this email")
                    break
                case 'auth/wrong-password' :
                    alert("incorrect password")
                    break
                default :
                    console.error(err)
            }

        }
    }
  
    return (
      <div className='sign-in-container'>
        <h2>I already have an account</h2>
        <span>Sign In Page</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Email" type="text" required onChange={handleChange} name="email" value={email}/>
            <FormInput label="Password" type="Password" required onChange={handleChange} name="password" value={password}/>
            <div className="buttonsContainer">
                <Button type="submit">Sign in</Button>
                <Button type="button" buttonType="google" onClick={logGoogleUser}>Continue with Google</Button>
            </div>
        </form>
      </div>
    );
};

export default SignInForm;