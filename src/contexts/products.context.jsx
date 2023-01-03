import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js';
import  {getCategoriesAndDocuments} from '../utils/firebase/firebase.utils'

export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({ children }) => {

    //why we need to put it in a state? I guess the user can filter the product and trigger new rendering.
    const [products, setProducts] = useState([]);

    //This code is just to set up the db but should be run once and deleted to avoid rerunning.
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])

    useEffect(()=> {
        const getCategoriesMap = async () =>{
            const categoryMap = await getCategoriesAndDocuments()
            // console.log(categoryMap);

        }

        getCategoriesMap();
    },[])

    const value = {products};

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}