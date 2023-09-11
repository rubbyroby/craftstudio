import FormFr from '../components/form/FormFr'
import Bloc from '../components/bloc/Bloc'
import './home.css'
import transition from '../transition'

const Home = () => {
    return (
        <div className='parent-container'>
        <Bloc/>
       <FormFr/>
        </div>
    )
}
export default transition(Home);