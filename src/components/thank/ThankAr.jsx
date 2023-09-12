import React from 'react'
import './thankAr.css'
import LG from '../../assets/lg.png'
import SG from '../../assets/slogan.png'
import { useParams } from 'react-router-dom';
import WV from '../../assets/wave2.png'
import transition from '../../transition'

const Thank = () => {

    const {userName} = useParams();

  return (

    <div className='container_logo_ar'>
      <div className="card">
     

    <div className="text">
    <h1>شكرًا لمشاركة
      <br />
      رؤيتك للشعار!
      </h1>
    <p >
    أفكارك لا تقدر بثمن بالنسبة لنا. نحن ممتنون لأنك قضيت وقتًا في مشاركة تفضيلاتك بشأن الشعار. تم تقديم استبيانك بنجاح، ونحن متحمسون للبدء في هذه الرحلة الإبداعية معًا.

    </p>
    </div>
    <img src={WV} alt="wave" className='wave' />
</div>
    
   

    </div>
    

  )
}

export default transition(Thank);
