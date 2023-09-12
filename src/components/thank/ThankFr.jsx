import React from 'react';
import './thank.css';
import LG from '../../assets/lg.png';
import SG from '../../assets/slogan.png';
import { useParams } from 'react-router-dom';
import WV from '../../assets/wave2.png';
import transition from '../../transition';
import BG from '../background/BGImage';

const Thank = () => {
    const { userName } = useParams();

    return (
        <div className='container_logo'>
            <div className='card'>
            <div className="text">
            <h1>Merci D'avoir Partagé <br /> 
                Votre Vision de Logo!</h1>
                <p>
                    Vos idées sont inestimables pour nous.
                    Nous sommes reconnaissants que vous ayez pris le temps de partager vos préférences en matière de logo.
                    Votre questionnaire a été soumis avec succès, et nous sommes impatients de nous lancer dans ce voyage créatif ensemble.
                </p>
                </div>
                <img src={WV} alt="wave" className='wave' />

            
                
            </div>
        
        </div>
    )
}

export default transition(Thank);
