import { createContext, useState } from "react";
import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({ children }) => {

    //why we need to put it in a state? I guess the user can filter the product and trigger new rendering.
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}