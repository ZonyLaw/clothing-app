import { Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { NavigationContainer,NavLink, LogoContainer } from './navigation.styles.jsx';

import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';


const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const { isCartOpen} = useContext(CartContext);
    // console.log( "nav", currentUser );
   
    return (
        
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className='logo'/>
            </LogoContainer>
            <NavLink>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                
                {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                     ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                )}
                <CartIcon />
            </NavLink>
            {isCartOpen && <CartDropdown />}
        
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    );
}

  export default Navigation;