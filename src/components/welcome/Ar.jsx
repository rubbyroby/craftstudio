import React from "react";
import "./ar.css";
import MR from '../../assets/mr.png'
import ZG from '../../assets/zigzag.png'
import RW from '../../assets/row.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Ar = () => {


  const [carteCliqueear, setCarteCliquee] = useState(false);
  const navigate = useNavigate();
  const handleClickEn = () => {
  
   // Naviguer vers la page de formulaire (/Home) après le délai
   navigate('/استقبال');

    setCarteCliquee(true);


  };
    return (
      <div>
      <div className={`trans ${carteCliqueear ? 'carte_cliquee' : ''}`}>
        
        <div className="AR" onClick={handleClickEn}>
            <img className="zigzag" alt="Vector" src={ZG} />
            <img className="row" alt="Group" src={RW} />
            <div className="step">المرحلة الأولى</div>
            <div className="continue">المواصلة</div>
            <div className="langue">العربية</div>
            <p className={`choix ${carteCliqueear ? 'carte_cliquee' : ''}`}>
                اختــــــر اللغـــــة المنــــــــاسبة <br />
                لــك للمتـــــــابــعــة
            </p>
            <img className="flag" alt="Layer" src={MR} />
        </div>
        </div>
        </div>
        
    );
};


export default Ar;