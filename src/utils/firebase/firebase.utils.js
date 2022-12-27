import { initializeApp } from 'firebase/app';

import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhCn1Zo2PHE68dM2iuWf-5agni_Jz0gt0",
  authDomain: "clothing-app-db-1b9ed.firebaseapp.com",
  projectId: "clothing-app-db-1b9ed",
  storageBucket: "clothing-app-db-1b9ed.appspot.com",
  messagingSenderId: "739469638909",
  appId: "1:739469638909:web:64ca51569ae95ef71fd294"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth=getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider );
export const db = getFirestore();


export const createUserDocumentFromAuth = async(
    userAuth,
    additionalInformation = {}
) => {
    if(!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
   
    return await createUserWithEmailAndPassword(auth, email, password);
    
};

export const signinAuthWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
   
    return await signInWithEmailAndPassword(auth, email, password);
    
};
