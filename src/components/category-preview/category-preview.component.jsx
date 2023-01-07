import { CategoryPreviewContainter, CatTitle, Preview  } from './category-preview.styles.jsx'
import ProductCard from '../product-card/product-card.componenet'


const CategoryPreview = ( {title, products}) => {

    return(
        <CategoryPreviewContainter>
            
                <CatTitle to={title}>
                    <h2>{title.toUpperCase()}</h2>
                </CatTitle>
               
            
            <Preview>
                {
                    products
                        .filter(( _, idx )=> idx < 4 )
                        .map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </Preview>


        </CategoryPreviewContainter>
    )
}

export default CategoryPreview