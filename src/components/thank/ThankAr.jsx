import React from 'react'
import './thankAr.css'
import LG from '../../assets/lg.png'
import SG from '../../assets/slogan.png'
import { useParams } from 'react-router-dom';
import WV from '../../assets/wave.png'
import transition from '../../transition'

const Thank = () => {

    const {userName} = useParams();

  return (

    <div className='container_logo_ar'>
      
    <div className='card'>
    <h1>شكرًا لمشاركة
رؤيتك للشعار!
      </h1>
    <p className='paragraphe'>
    أفكارك لا تقدر بثمن بالنسبة لنا. نحن ممتنون لأنك قضيت وقتًا في مشاركة تفضيلاتك بشأن الشعار. تم تقديم استبيانك بنجاح، ونحن متحمسون للبدء في هذه الرحلة الإبداعية معًا.

    </p>

    <p className='craft'>WE CRAFT</p>
    </div>
    <img src={WV} alt="wave" className='wave' />
    </div>
    

  )
}

export default transition(Thank);
