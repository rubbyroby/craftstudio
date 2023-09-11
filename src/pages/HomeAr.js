import FormAr from '../components/form/FormAr'
import Bloc from '../components/bloc/Bloc'
import './home.css'
import transition from '../transition'

const Home = () => {
    return (
        <div className='parent-container'>
        <Bloc/>
       <FormAr/>
        </div>
    )
}
export default transition(Home);