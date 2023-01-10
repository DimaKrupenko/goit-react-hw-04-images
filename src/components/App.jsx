import styles from './styles.css'
import React from 'react'
import { Audio } from 'react-loader-spinner'
import { Searchbar } from './Searchbar/Searchbar'
import {ImageGallery} from './ImageGallery/ImageGallery'
import { API} from '../services/api'
import Button from './Button/Button'
import Modal from 'components/Modal/Modal'



export class App extends React.Component {
  state = {
    imagesSearch: [],
    isLoading: false,
    showModal: false,
    searchQuery: '',
    largeImageUrl: '',
  }
  
   
  addMaterial = async () => {
    try {
      this.setState({ isLoading: true })
      API.resetPage()
      API.resetQuery()
      API.setQuery(this.state.searchQuery)
      const material = await API.addMaterial()
      this.setState({
        imagesSearch: material,
        isLoading: false
      })
     
      API.increasePage()

      this.setState({
    searchQuery: ''
 })}
    
    catch (error) {
      console.log(error)
    }
  }

  onLoad = async () => {
    try {
      this.setState({
        isLoading: true
      })
      const material = await API.addMaterial()
      this.setState({
        imagesSearch: [...this.state.imagesSearch, ...material],
         isLoading: false
      })
      API.increasePage()
    }
    catch (error) {
      console.log(error)
    }
  }

  queryHandler =(evt)=> {
    this.setState({
      searchQuery: evt.target.value
    })
  }

  modalHandler = (item) => {
    this.setState({
      largeImageUrl: item.largeImageURL
    })
    this.showModal()
  }
  
 
  closeModal = () => {
    this.setState({
       showModal: false
     })
   }
  
  showModal = () => {
     this.setState({
       showModal: true
     })
  }

  render() {
    return (
    <div className={styles.App}
    >
      <Searchbar
          onSubmit={this.addMaterial}
          value={this.state.searchQuery}
          onChange={this.queryHandler}
      />
      {this.state.isLoading && <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
        
      />}
      <ImageGallery
          items={this.state.imagesSearch}
          modalHandler={this.modalHandler}
        />
        {this.state.imagesSearch.length >= 12 &&
          <Button
          onLoad={this.onLoad}
          />}
         {this.state.showModal && <Modal
            onClose={this.closeModal}>
            <img src={this.state.largeImageUrl} alt='img'/>
            </Modal>}
    </div>
  );
  }
};

