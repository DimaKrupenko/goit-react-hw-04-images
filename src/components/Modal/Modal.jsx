import styles from './Modal.module.css'
import React from 'react'
import { useEffect } from "react";



const Modal = ({ largeImageUrl, onClose }) => {
   
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
})

  const handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      // this.setState(state => ({
      //   showModal: false
      // }))
     onClose()

    }
  }
    
    const handleClickBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      //  this.setState(state => ({
      //   showModal: false
      // }))
     onClose()
    }
    }
  
         return <div className={styles.overlay} onClick={handleClickBackdrop}>
        <div className={styles.modal}>
                <img src={largeImageUrl} alt='img'/>
    
  </div>
</div>
    }
   



export default Modal