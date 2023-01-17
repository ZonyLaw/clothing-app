import Home from './routes/home/home.component';
import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.components';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.components';
import Checkout from './routes/checkout/checkout.component';

import { useEffect} from 'react'
import { onAuthStateChangedListener, createUserDocumentFromAuth} from './utils/firebase/firebase.utils';

import { setCurrentUser } from './store/user/user.action';

import { useDispatch } from 'react-redux';


// const Shop = () => {
//   return (
//     <h1>I am the shop page</h1>
//   );
// }

const App=()=> {
  //this dispatch calls on all reduceer
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) =>{
        if(user){
            createUserDocumentFromAuth(user);
        }
        //this dispatch call all reducer function
        dispatch(setCurrentUser(user));
    })
    return unsubscribe
    //we add dispatch as react doesn't know this doesn't change, but get confusing as it may suggest it will run every time there is a dispatch.
    //an exception so better to leave it out.
  },[])

 return(
  <Routes>
    <Route path='/' element={ <Navigation/> }>
      <Route index element={ <Home/> }/>
      <Route path='/shop/*' element={ <Shop/> }/>
      <Route path='/auth' element={ <Authentication/> }/>
      <Route path='/checkout' element={ <Checkout /> }/>
      
    </Route>
  </Routes>
 );
};

export default App;
