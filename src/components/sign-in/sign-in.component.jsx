import { useState} from 'react';
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { signInWithGooglePopup,
    signinAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: ''
}



const SignInForm = () => {
    
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
      
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await signinAuthWithEmailAndPassword(email, password);
            
            resetFormFields();
        } catch(error){
            // console.log(error);
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Wrong password for email.');
                    break;
                case 'auth/user-not-found':
                    alert('email does not exist.')
                    break;
                default:
                    console.log(`Other error`);
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
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
            </form>

        </div>
    );

}

export default SignInForm;