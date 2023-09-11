import React, { useEffect, useState, useMemo } from "react";
import Ar from "./Ar";
import En from "./En";
import Fr from "./Fr";
import "./hi2.css";
import LG from '../../assets/lg.png'
import SG from '../../assets/sghorz.png'
import transition from '../../transition'


export const Carts = () => {


  return (
    <div className="global">
      



       <div className="container_hi">

        

            <div className="slogan" >
            <img alt="Slogan" src={SG} />
            <div className="carte_langue" >             
              <En className="en"/>
              <Fr className="fr"/>
              <Ar className="ar"/> 
            </div> 
            </div>
            
          <div className="container_hi_logo">

          


            
          </div>
      </div>
            
            <div className="logo">
              <img  alt="Logo" src={LG} />
            </div>
            
  
    
    </div>
  );
};

export default transition(Carts) ;