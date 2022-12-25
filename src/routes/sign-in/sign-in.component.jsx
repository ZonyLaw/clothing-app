import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';


const SignIn = () => {

    useEffect( () => {
        async function fetchdata(){
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
            console.log(response);
        }
        fetchdata();
    }, []);
    
   
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

    }

// const logGoogleRedirectUser = async () => {
//     const { user } = await signInWithGoogleRedirect();
//     console.log({user});
// }

    return(
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button>
        </div>
    );
}

export default SignIn;