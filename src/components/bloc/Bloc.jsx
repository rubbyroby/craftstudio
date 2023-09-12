import React from 'react'
import './bloc.css'
import LG from '../../assets/lg.png'
import SG from '../../assets/slogan.png'
import BG from '../../assets/bg.jpg'

const Bloc = () => {

  


  return (
    <div className='container_lgsg' >       
        <img src={LG} alt="" className='lg' />
        <img src={SG} alt="" className='sg' />
    </div>
  )
}

export default Bloc