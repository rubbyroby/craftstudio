import React from 'react'
import './thank.css'
import LG from '../../assets/lg.png'
import SG from '../../assets/slogan.png'
import { useParams } from 'react-router-dom';
import WV from '../../assets/wave2.png'
import transition from '../../transition'

const Thank = () => {

    const {userName} = useParams();

  return (

    <div className='container_logo'>
      <div className='card'>

      <div className="text">
    <h1>Thank You for Sharing <br />
      Your Logo Vision!
      </h1>
    <p>
    Your insights are invaluable to us. 
    We're grateful you've taken the time to share your logo preferences with us. 
    Your questionnaire has been successfully submitted, 
    and we're excited to embark on this creative journey together.
    </p>
    </div>
    <img src={WV} alt="wave" className='wave' />

   
    </div>
    </div>
    

  )
}

export default transition(Thank);
