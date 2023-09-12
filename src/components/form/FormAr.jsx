import React, { useState } from 'react';
import axios from 'axios';
import './formAr.css';
import { useNavigate } from 'react-router-dom';






function App({ backgroundColor }) {
  const [selectedOptionsLangue, setSelectedOptionsLangue] = useState([]);
  const [selectedOptionsClient, setSelectedOptionsClient] = useState([]);
  const [selectedOptionsDesign, setSelectedOptionsDesign] = useState([]);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const navigate = useNavigate();
  const [userName, setUserName] = useState(''); // État local pour stocker le nom de l'utilisateur



  const handleButtonClickLangue = (option) => {
    if (selectedOptionsLangue.includes(option)) {
      setSelectedOptionsLangue(selectedOptionsLangue.filter((item) => item !== option));
    } else {
      setSelectedOptionsLangue([...selectedOptionsLangue, option]);
    }
  };

  const handleButtonClickClient = (option) => {
    if (selectedOptionsClient.includes(option)) {
      setSelectedOptionsClient(selectedOptionsClient.filter((item) => item !== option));
    } else {
      setSelectedOptionsClient([...selectedOptionsClient, option]);
    }
    if (name === 'client') {
      const selectedOption = selectedOptionsClient.length > 0 ? selectedOptionsClient[0] : '';
      setData((prevData) => ({
        ...prevData,
        client: selectedOption,
      }));
    }
  };

  const handleButtonClickDesign = (option) => {
    if (selectedOptionsDesign.includes(option)) {
      setSelectedOptionsDesign(selectedOptionsDesign.filter((item) => item !== option));
    } else {
      setSelectedOptionsDesign([...selectedOptionsDesign, option]);
    }
    if (name === 'design') {
      const selectedOption = selectedOptionsDesign.length > 0 ? selectedOptionsDesign[0] : '';
      setData((prevData) => ({
        ...prevData,
        design: selectedOption,
      }));
    }
  };

  const [data, setData] = useState({
    
    name: '',
    decriver: '',
    message: '',
    langue: '', // Modifier le nom du champ pour correspondre à l'option sélectionnée
    coleur: '',
    symbole: '',
    client: '',
    design: '',
  });

  const handleChange = (e) => {    
    // Define your handleChange function here
    const { name, value } = e.target;

    console.log("data envoyer");

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { name, decriver, message, langue, coleur, symbole, client, design } = data;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    setUserName(name);
    navigate('/شكرا'); // Passez le nom de l'utilisateur en tant que paramètre d'URL
    console.log('name evoyer');
    console.log(`Nom ${userName} ` + "message" + `${message}`+`langue${langue}`)
    setIsSubmitClicked(true);

    try {
      const response = await axios.post(
        'https://v1.nocodeapi.com/wecraft/google_sheets/ulDPkoWEgEwmgjdV?tabId=page1',
        [
          [
            new Date(),
            name,
            decriver,
            message,
            selectedOptionsLangue.join(', '), // Concaténez les options sélectionnées en une seule chaîne
            coleur,
            symbole,
            `${selectedOptionsClient.join(', ')} - ${client}`,
            `${selectedOptionsDesign.join(', ')} - ${design}`,
          ],
        ],
        
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        console.log('Données envoyées avec succès à Google Sheets.');
        setData({
          name: '',
          decriver: '',
          message: '',
          langue: '',
          coleur: '',
          symbole: '',
          client: '',
          design: '',
        });
        setSelectedOptionsLangue([]);
        setSelectedOptionsClient([]);
        setSelectedOptionsDesign([]); // Réinitialisez les options sélectionnées
      } else {
        console.error("Erreur lors de l'envoi des données à Google Sheets.");
      }

    } catch (error) {
      console.error("Erreur lors de l'envoi des données à Google Sheets :", error);
    }
  };















  return (
    <div>
      

      <div className="container_form_ar">
        <h1>استبيان تصميم الشعار</h1>
        <form onSubmit={handleFormSubmit}>
            <article id='blok'>
            <label htmlFor='nom' id='semibold'>ما هو اسم شركتك / مؤسستك؟ *</label><br/>
            <input type='text' name='name' id='regular' required value={name} onChange={handleChange}/>
            </article>

            <article id='blok'>
            <label htmlFor='decriver' id='semibold' >هل يمكنك وصف شركتك / مؤسستك وما تقدمه بإختصار ؟ *</label><br/>
            <input type='text' name='decriver' id='regular' required value={decriver} onChange={handleChange}/>
            </article>

            <article id='blok'>
            <label htmlFor='message' id='semibold' >ما هي الرسالة أو الانطباع الذي ترغب في أن يوحي به الشعار ؟</label><br/>
            <input type='text' name='message'id='regular' value={message} onChange={handleChange} />
            </article>

            <article id="blok">
            <label htmlFor="langue" id="semibold">
            ماهي اللغة اللتي تفضل ان يصمم بها الشعار؟*
            </label>
            <br />
            <div className="sizebutton">
              <button
                type="button"
                name="langue"
                id="regular"
                className={`button ${selectedOptionsLangue.includes('Arabe') ? 'click' : ''}`}
                onClick={() => handleButtonClickLangue('Arabe')}
              >
                العربي
              </button>
              <button
                type="button"
                name="langue"
                id="regular"
                className={`button ${selectedOptionsLangue.includes('Français') ? 'click' : ''}`}
                onClick={() => handleButtonClickLangue('Français')}
              >
                الفرنسية
              </button>
              <button
                type="button"
                name="langue"
                id="regular"
                className={`button ${selectedOptionsLangue.includes('Anglais') ? 'click' : ''}`}
                onClick={() => handleButtonClickLangue('Anglais')}
              >
                الانجليزية
              </button>
            </div>
            <br />
          </article>
          
          <article id='blok'>
            <label htmlFor='coleur' id='semibold'>هل لديك أي ألوان تفضلها للشعار؟
            <br />
            إذا كان الجواب نعم، يرجى التحديد.
            </label><br/>
            <input type='text' name='coleur' id='regular' value={coleur} onChange={handleChange} />
            <br/>
          </article>

            <article id='blok'>
            <label htmlFor='symbole' id='semibold'>هل هناك رموز معينة تود أن تكون في الشعار؟
            <br />
            إذا كان الجواب نعم، يرجى تدحديد ماهي.
            </label><br/>
            <input type='text' name='symbole' id='regular' value={symbole} onChange={handleChange}/>
            <br/>
            </article>
            <article id="blok">
            <label htmlFor="client" id="semibold">
            من هو الجمهور المستهدف لشركتك / مؤسستك؟
            </label>
            <br />
            <div className="sizebutton">
            <button
            type="button"
            name="client"
            id="regular"
            className={`button ${selectedOptionsClient.includes('Les jeunes (18-25 ans)') ? 'click' : ''}`}
            onClick={() => handleButtonClickClient('Les jeunes (18-25 ans)')}
              >
            الشباب (18-25 سنة)

            </button>
            <button
            type="button"
            name="client"
            id="regular"
            className={`button ${selectedOptionsClient.includes('Les adultes (25-40 ans)') ? 'click' : ''}`}
            onClick={() => handleButtonClickClient('Les adultes (25-40 ans)')}
            >
            البالغين (25-40 سنة)

            </button>
            <button
            type="button"
            name="client"
            id="regular"
            className={`button ${selectedOptionsClient.includes('Les familles') ? 'click' : ''}`}
            onClick={() => handleButtonClickClient('Les familles')}
            >
            العائلات
            </button>
            <button
            type="button"
            name="client"
            id="regular"
            className={`button ${selectedOptionsClient.includes('Les jeunes profissionnels') ? 'click' : ''}`}
            onClick={() => handleButtonClickClient('Les jeunes profissionnels')}
            >
            الشباب المهنيين
            </button>
            <button
            type="button"
            name="client"
            id="regular"
            className={`button ${selectedOptionsClient.includes('Les employés') ? 'click' : ''}`}
            onClick={() => handleButtonClickClient('Les employés')}
            >
            الموضفين
            </button>
            <button
            type="button"
            name="client"
            id="regular"
            className={`button ${selectedOptionsClient.includes('Les étudiants') ? 'click' : ''}`}
            onClick={() => handleButtonClickClient('Les étudiants')}
            >
            الطلاب
            </button>
            <button
            type="button"
            name="client"
            id="regular"
            className={`button ${selectedOptionsClient.includes('Les femmes') ? 'click' : ''}`}
            onClick={() => handleButtonClickClient('Les femmes')}
            >
            النساء
            </button>
            <button
            type="button"
            name="client"
            id="regular"
            className={`button ${selectedOptionsClient.includes('Les inarticleidus à revenu élevé') ? 'click' : ''}`}
            onClick={() => handleButtonClickClient('Les inarticleidus à revenu élevé')}
            >
           الأفراد ذوي الدخل المرتفع
            </button>
            <button
            type="button"
            name="client"
            id="regular"
            className={`button ${selectedOptionsClient.includes('Les inarticleidus à revenu moyen') ? 'click' : ''}`}
            onClick={() => handleButtonClickClient('Les inarticleidus à revenu moyen')}
            >
            الأفراد ذوي الدخل المتوسط
            </button>
            <button
            type="button"
            name="client"
            id="regular"
            className={`button ${selectedOptionsClient.includes('Les hommes') ? 'click' : ''}`}
            onClick={() => handleButtonClickClient('Les hommes')}
            >
            الرجال
            </button>
            <button
            type="button"
            name="client"
            id="regular"
            className={`button ${selectedOptionsClient.includes('Les entreprise et les organisations') ? 'click' : ''}`}
            onClick={() => handleButtonClickClient('Les entreprise et les organisations')}
            >
            الشركات والمؤسسات
            </button>
            <button
            type="button"
            name="client"
            id="regular"
            className={`button ${selectedOptionsClient.includes('Le grand public') ? 'click' : ''}`}
            onClick={() => handleButtonClickClient('Le grand public')}
            >
            الجميع
            </button>
            <button
            type="button"
            name="client"
            id="regular"
            className={`button ${selectedOptionsClient.includes('Les personnes àgées') ? 'click' : ''}`}
            onClick={() => handleButtonClickClient('Les personnes àgées')}
            >
            المسنون
            </button>             
            </div>
            <br />
          </article>


          <div className="topspan">
            <span id="regular">اخر:</span>
          </div>

          <input
            name="client"
            type="text"
            id="regular"
            className='line'
            onChange={handleChange} 
            value={client}
          />
          <br />

          <article id='blok'>
            <label htmlFor='design' id='semibold'>
            ماهو الاحساس او المضهر الذي ترغب ان يضهر به الشعار؟
            </label><br/>
            <div className='sizebutton'>
              <button
                type='button'
                name='design'
                id='regular'
                className={`button ${selectedOptionsDesign.includes('Simplicité') ? 'click' : ''}`}
                onClick={() => handleButtonClickDesign('Simplicité')}
              >
                البساطة
              </button>
              <button
                type='button'
                name='design'
                id='regular'
                className={`button ${selectedOptionsDesign.includes('Audace') ? 'click' : ''}`}
                onClick={() => handleButtonClickDesign('Audace')}
              >
                جرأة
              </button>
              <button
                type='button'
                name='design'
                id='regular'
                className={`button ${selectedOptionsDesign.includes('Modernité') ? 'click' : ''}`}
                onClick={() => handleButtonClickDesign('Modernité')}
              >
                حديث
              </button>
              <button
                type='button'
                name='design'
                id='regular'
                className={`button ${selectedOptionsDesign.includes('Inspiration de la nature') ? 'click' : ''}`}
                onClick={() => handleButtonClickDesign('Inspiration de la nature')}
              >
                مستوحى من الطبيعة

              </button>
              <button
                type='button'
                name='design'
                id='regular'
                className={`button ${selectedOptionsDesign.includes('Ludique') ? 'click' : ''}`}
                onClick={() => handleButtonClickDesign('Ludique')}
              >
                لعب / مرح

              </button>
              <button
                type='button'
                name='design'
                id='regular'
                className={`button ${selectedOptionsDesign.includes('Classique') ? 'click' : ''}`}
                onClick={() => handleButtonClickDesign('Classique')}
              >
                تصميم كلاسيكي

              </button>
              <button
                type='button'
                name='design'
                id='regular'
                className={`button ${selectedOptionsDesign.includes('Paisible') ? 'click' : ''}`}
                onClick={() => handleButtonClickDesign('Paisible')}
              >
                هادئ
              </button>
              <button
                type='button'
                name='design'
                id='regular'
                className={`button ${selectedOptionsDesign.includes('Design féminin') ? 'click' : ''}`}
                onClick={() => handleButtonClickDesign('Design féminin')}
              >
                تصميم أنثوي

              </button>
              <button
                type='button'
                name='design'
                id='regular'
                className={`button ${selectedOptionsDesign.includes('Design masculin') ? 'click' : ''}`}
                onClick={() => handleButtonClickDesign('Design masculin')}
              >
                تصميم رجالي

              </button>
            </div>
            <div className='topspan'>
              <span id='regular'>اخر:</span>
            </div>
            <input 
            name='design'  
            type='text'  
            id='regular' 
            className='line' 
            onChange={handleChange} 
            value={design}
            />
            <br/>
          </article>


          <article id='blok'>
          <button type='submit' id='semibold' className={`buttoncss ${isSubmitClicked ? 'click' : ''}`} >ارسال</button>
          </article>
          <div>
          <h5>
          
إذا كان لديك أي صعوبة في وصف تصميم الشعار الخاص بك، فلا تتردد في الاتصال بنا على العنوان التالي 
<br /> <a href="mailto:hey@wecraftstudio.com">hey@wecraftstudio.com</a> </h5>
          </div>
     </form>
    </div>
  </div>
   );
 }

export default App;
