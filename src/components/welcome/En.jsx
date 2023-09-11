import React from "react";
import "./en.css";
import UK from '../../assets/uk.png'
import ZG from '../../assets/zigzag.png'
import RW from '../../assets/row.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export const En = () => {

    const [carteCliqueeen, setCarteCliquee] = useState(false);
    const navigate = useNavigate();
    const handleClickEn = () => {
    
     // Naviguer vers la page de formulaire (/Home) après le délai
     navigate('/Home');
     setCarteCliquee(true);


    };
  
    return (
        <div className={`trans ${carteCliqueeen ? 'carte_cliquee' : ''}`}>
        <div className="EG" onClick={handleClickEn}>
            <img className="zigzag" alt="Vector" src={ZG} />
            <img className="row" alt="Group" src={RW} />
            <div className="step">Step One</div>
            <div className="continue">Continue</div>
            <div className="langue">English</div>
            <p className={`choix ${carteCliqueeen ? 'carte_cliquee' : ''}`}>
                Choose the appropriate <br />
                language for you to continue
            </p>
            <img className="flag" alt="Flag" src={UK} />
        </div>
        </div>
    );
};


export default En;