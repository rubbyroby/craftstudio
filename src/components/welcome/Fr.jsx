import React from "react";
import "./fr.css";
import FR from '../../assets/fr.png'
import ZG from '../../assets/zigzag.png'
import RW from '../../assets/row.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export const Fr = () => {


  const [carteCliqueefr, setCarteCliquee] = useState(false);
  const navigate = useNavigate();
  const handleClickFr = () => {
  
   // Naviguer vers la page de formulaire (/Home) après le délai
   navigate('/Accueille');

    setCarteCliquee(true);
  }; 




    return (
      <div className={`trans ${carteCliqueefr ? 'carte_cliquee' : ''}`}>
        <div className="FR" onClick={handleClickFr}>
            <img className="zigzag" alt="Vector" src={ZG} />
            <img className="row" alt="Group" src={RW} />
            <div className="step">Première étape</div>
            <div className="continue">Continuer</div>
            <div className="langue">Français</div>
            <p className={`choix ${carteCliqueefr ? 'carte_cliquee' : ''}`}>
                Choisissez la langue <br />
                appropriée pour continuer
            </p>
            <img className="flag" alt="Flag" src={FR} />
        </div>
        </div>
    );
};


export default Fr;