import styles from './styles.css'
import { useState } from "react";
import { Audio } from 'react-loader-spinner'
import { Searchbar } from './Searchbar/Searchbar'
import {ImageGallery} from './ImageGallery/ImageGallery'
import { API} from '../services/api'
import Button from './Button/Button'
import Modal from 'components/Modal/Modal'




export const App = () => {
  // state = {
  //   imagesSearch: [],
  //   isLoading: false,
  //   showModal: false,
  //   searchQuery: '',
  //   largeImageUrl: '',
  // }

  const [imagesSearch, setImagesSearch] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [largeImageUrl, setLargeImageUrl] = useState('')

  
   
  const addMaterial = async () => {
    try {
      setIsLoading(true)
      API.resetPage()
      API.resetQuery()
      API.setQuery(searchQuery)
      const material = await API.addMaterial()
      setImagesSearch(material)
      setIsLoading(false)
     
      API.increasePage()

      setSearchQuery('')
    }
    
    catch (error) {
      console.log(error)
    }
  }

  const onLoad = async () => {
    try {
      setIsLoading(true)
      const material = await API.addMaterial()
      setImagesSearch(prevState => [...imagesSearch, ...material])
       setIsLoading(false)
      API.increasePage()
    }
    catch (error) {
      console.log(error)
    }
  }

  const queryHandler =(evt)=> {
   
    setSearchQuery(evt.target.value)
  }

 const modalHandler = (item) => {
   
   setLargeImageUrl(item.largeImageURL)
    showModalHandler()
  }
  
 
  const closeModal = () => {
    setShowModal(false)
   }
  
  const showModalHandler = () => {
     setShowModal(true)
  }

  
    return (
    <div className={styles.App}
    >
      <Searchbar
          onSubmit={addMaterial}
          value={searchQuery}
          onChange={queryHandler}
      />
      {isLoading && <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
        
      />}
      <ImageGallery
          items={imagesSearch}
          modalHandler={modalHandler}
        />
        {imagesSearch.length >= 12 &&
          <Button
          onLoad={onLoad}
          />}
         {showModal && <Modal
            onClose={closeModal}
            largeImageUrl={largeImageUrl}>
            </Modal>}
    </div>
  );
  
};

