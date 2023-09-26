import React from 'react'
import './LoadingPage.css'
import favicon from '../../assets/images/favicon.ico'

const LoadingPage = () => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner">
        <img className='loading-spinner-imgagen' src={favicon} alt="logo" style={{ animation: 'none' }} />
      </div>
    </div>
  )
}

export default LoadingPage
