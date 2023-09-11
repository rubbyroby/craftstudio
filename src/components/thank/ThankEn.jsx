import React from 'react'
import './thank.css'
import LG from '../../assets/lg.png'
import SG from '../../assets/slogan.png'
import { useParams } from 'react-router-dom';
import WV from '../../assets/wave.png'
import transition from '../../transition'

const Thank = () => {

    const {userName} = useParams();

  return (

    <div className='container_logo'>
      
    <div className='card'>
    <h1>Thank You for Sharing 
      
      Your Logo Vision!
      </h1>
    <p className='paragraphe'>
    Your insights are invaluable to us. 
    We're grateful you've taken the time to share your logo preferences with us. 
    Your questionnaire has been successfully submitted, 
    and we're excited to embark on this creative journey together.
    </p>

    <p className='craft'>WE CRAFT</p>
    </div>
    <img src={WV} alt="wave" className='wave' />
    </div>
    

  )
}

export default transition(Thank);
