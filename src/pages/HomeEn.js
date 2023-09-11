import FormEn from '../components/form/FormEn'
import Bloc from '../components/bloc/Bloc'
import './home.css'
import transition from '../transition'

const Home = () => {
    return (
        <div className='parent-container'>
        <Bloc/>
       <FormEn/>
        </div>
    )
}
export default transition(Home);