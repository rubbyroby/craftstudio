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
        <h1>Merci D'avoir Partagé
            Votre Vision de Logo!
            
          </h1>
        <p className='paragraphe'>
        Vos idées sont inestimables pour nous. 
        Nous sommes reconnaissants que vous ayez pris le temps de partager vos préférences en matière de logo. 
        Votre questionnaire a été soumis avec succès, et nous sommes impatients de nous lancer dans ce voyage créatif ensemble.
        </p>

        <p className='craft'>WE CRAFT</p>
      </div>
      <img src={WV} alt="wave" className='wave' />
    </div>
    

  )
}

export default transition(Thank);
