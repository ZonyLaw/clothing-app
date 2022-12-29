import { useState, useContext } from 'react';
import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';
import { signInWithGooglePopup,
     createUserDocumentFromAuth,
    signinAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/user.context';

const defaultFormFields = {
    email: '',
    password: ''
}



const SignInForm = () => {
    
    const { setCurrentUser }= useContext(UserContext);
    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const { user } = await signinAuthWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFormFields();
        } catch(error){
            console.log(error);
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Wrong password for email.');
                    break;
                case 'auth/user-not-found':
                    alert('email does not exist.')
                    break;
                
            }
                     
        }

    }
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return(
        <div className="sign-up-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                   
                <FormInput 
                    label="Email"
                    type="email" required onChange={handleChange} name="email" 
                    value={email}/>

                <FormInput  
                    label="Password"
                    type="password" required onChange={handleChange} name="password" 
                    value={password}/>

                <div className = 'buttons-container'>
                    <Button type="submit">Sign-in</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
            </form>

        </div>
    );

}

export default SignInForm;