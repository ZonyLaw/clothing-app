import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { NavigationContainer, NavLinksContainer ,NavLink, LogoContainer } from './navigation.styles.jsx';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
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