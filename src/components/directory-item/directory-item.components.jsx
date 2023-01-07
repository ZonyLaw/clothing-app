import {DirectoryItemContainer, BackgroundImage, Body} from './directory-item.styles.jsx'

const DirectoryItem = ({ category }) =>{
    const { imageUrl, title } = category;
    return(
        <DirectoryItemContainer>
            {/* {console.log({imageUrl})} */}
            <BackgroundImage
            imageUrl={imageUrl}
        />
            <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )

}

export default DirectoryItem;