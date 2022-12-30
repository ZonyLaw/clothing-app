import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    //if cartItems contains product
    
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem){
        return cartItems.map((cartItem)=> cartItem.id===productToAdd.id ?
                {...cartItem, quantity: cartItem.quantity + 1} : cartItem
            );
        
    }


    return [...cartItems, { ...productToAdd, quantity: 1}];

    // if found, increment quantity

    //return new array with modified carItems / new cart item

}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
});


export const CartProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems};

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}

