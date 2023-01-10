import styles from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';


const ImageGalleryItem = ({ items, modalHandler }) => {
    return (
     items && items.map(item => (
         <li className={styles.ImageGalleryItem} key={item.id}><img onClick={() => modalHandler(item)} className={styles.ImageGalleryItemImage} key={item.id} src={item.webformatURL} alt=''></img></li>
         
     ))
    
)
       
 }

export default ImageGalleryItem

ImageGalleryItem.propTypes = {
    items: PropTypes.array,
    modalHandler: PropTypes.func,

};