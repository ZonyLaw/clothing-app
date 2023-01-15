import { createContext, useEffect, useReducer } from 'react'
import { onAuthStateChangedListener, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';
//as the actual value to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=>null,

});


export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    console.log('dispatch')
    console.log(action)
    const { type, payload } = action;

    switch(type) {
        case 'SET_CURRENT_USER':
            return {
                ...state, 
                currentUser: payload
            }
    
        default:
            throw new Error(`Unhandled type ${type} in the userReduce`);
    }

}

const INITIAL_STATE = {
    currentUswer: null
}

export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [ {currentUser}, dispatch ] = useReducer(userReducer, INITIAL_STATE )
    console.log(currentUser)

    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }

    const value = { currentUser, setCurrentUser };
    // signOutUser();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) =>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unsubscribe
    },[])

    return (
        <UserContext.Provider 
            value={value}
        >
            {children}
        </UserContext.Provider>
    )
}

