import {HashRouter,Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/about';
import Login from '../Pages/Login';
import Error from '../Pages/Error';


function Applayout(){

    return(
        <HashRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='*' element={<Error />}/>
        </Routes>
        </HashRouter>
    )
}
export default Applayout;   