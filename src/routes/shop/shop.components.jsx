import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.components'
import './shop.styles.scss'
import Category from '../category/category.component'
import { useEffect } from 'react'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

import { useDispatch } from 'react-redux'
// import { CATEGORIES_ACTION_TYPES } from '../store/categories/category.type'
// import { setCategoriesMap } from '../store/categories/category.action'
import { SET_CATEGORIES} from '../store/categories/category.reducer'



const Shop = () => {
   
    const dispatch = useDispatch();


    useEffect(()=> {
        
        const getCategoriesMap = async () =>{
            const categoriesArray = await getCategoriesAndDocuments('categories')
           
            // dispatch(setCategoriesMap(categoryMap))
           
            
            dispatch (SET_CATEGORIES(categoriesArray) )
            console.log(categoriesArray)
        }

        getCategoriesMap();
    },[dispatch])



    return(
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop
