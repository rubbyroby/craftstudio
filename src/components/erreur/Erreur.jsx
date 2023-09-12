import React from 'react'
import './error.css'
import Error from '../../assets/404pc.jpg'

function Erreur() {
  return (
    <div className='back'>
      
<img src={Error} alt="Error 404" />
    </div>
  );
}

export default Erreur;