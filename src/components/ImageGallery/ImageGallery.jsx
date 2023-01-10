import styles from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';


export const ImageGallery = ({ items, modalHandler }) => {
        return (
            <ul className={styles.ImageGallery}>
                    <ImageGalleryItem items={items} modalHandler={modalHandler}/>
            </ul>
             
    )
    
}
    

ImageGallery.propTypes = {
items: PropTypes.array,
modalHandler: PropTypes.func,

};

