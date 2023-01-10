import styles from './Modal.module.css'
import React from 'react'



class Modal extends React.Component{
   
    componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      // this.setState(state => ({
      //   showModal: false
      // }))
     this.props.onClose()

    }
  }
    
    handleClickBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      //  this.setState(state => ({
      //   showModal: false
      // }))
     this.props.onClose()
    }
  }

    render() {
         return <div className={styles.overlay} onClick={this.handleClickBackdrop}>
        <div className={styles.modal}>
                {this.props.children}
    
  </div>
</div>
    }
   
}


export default Modal