import './category-preview.styles.scss'
import ProductCard from '../product-card/product-card.componenet'
import { Link } from 'react-router-dom'

const CategoryPreview = ( {title, products}) => {

    return(
        <div className='category-preview-container'>
            
                <Link className='title' to={title}>
                    <h2>{title.toUpperCase()}</h2>
                </Link>
               
            
            <div className='preview'>
                {
                    products
                        .filter(( _, idx )=> idx < 4 )
                        .map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </div>


        </div>
    )
}

export default CategoryPreview