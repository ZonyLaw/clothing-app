import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
    //if cartItems contains product
    
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem){
        return cartItems.map((cartItem)=> cartItem.id===productToAdd.id ?
                {...cartItem, quantity: cartItem.quantity + 1} : cartItem
            );
    }

    return [...cartItems, { ...productToAdd, quantity: 1}];

}

const removeCartItem = (cartItems, cartItemToRemove ) =>{
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1 ){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem)=> cartItem.id===cartItemToRemove.id ?
                {...cartItem, quantity: cartItem.quantity - 1} : cartItem
            );
    
}


const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const CartContext = createContext({
   
    setIsCartOpen: () => {},
    addItemToCart: () => {},
    removeItemToCart: () => {},
    clearItemFromCart: () => {},
    // cartCount: 0, 
    // cartTotal: 0 
    // isCartOpen: false,
     // cartItems: [],

});

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_IS_OPEN: 'SET_CART_IS_OPEN'
}

const  INITIAL_STATE = {
    cartCount: 0, 
    cartTotal: 0,
    cartItems: [],
    isCartOpen: false
};



const cartReducer = (state, action) => {
    const{type, payload} = action;

    switch (type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_CART_IS_OPEN:
            return{
                ...state,
                isCartOpen: payload
            }
            
        default:
            throw new Error(`unhandle type of ${type} in cartReducer`)
    }



}

export const CartProvider = ({children}) =>{
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);

    // useEffect (()=>{
    //     const newCartCount = cartItems.reduce((total,cartItem) =>
    //         total + cartItem.quantity,0)
    //     setCartCount(newCartCount)
    // },[cartItems])

    // useEffect (()=>{
    //     const newCartTotal = cartItems.reduce((total,cartItem) =>
    //         total + cartItem.quantity*cartItem.price,0)
    //     setCartTotal(newCartTotal)
    // },[cartItems])

    const [{cartItems,  cartCount, cartTotal, isCartOpen }, 
        dispatch]= useReducer( cartReducer ,INITIAL_STATE )

    const updateCartItems = (newCartItems) => {

        const newCartCount = newCartItems.reduce((total,cartItem) =>
        total + cartItem.quantity,0)
   
        const newCartTotal = newCartItems.reduce((total,cartItem) =>
        total + cartItem.quantity*cartItem.price,0)

        dispatch({type: CART_ACTION_TYPES.SET_CART_ITEMS , payload: {cartItems: newCartItems, cartCount: newCartCount, cartTotal: newCartTotal}});
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItems(newCartItems)
    }

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItems(newCartItems)
    }

    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItems(newCartItems)
    }

    const setIsCartOpen = (bool) => {
        console.log(isCartOpen)
        dispatch({type: CART_ACTION_TYPES.SET_CART_IS_OPEN, payload: bool})
    }

    const value = {isCartOpen,
                setIsCartOpen,
                addItemToCart,
                removeItemToCart, 
                clearItemFromCart,
                cartItems, 
                cartCount, 
                cartTotal};

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}

