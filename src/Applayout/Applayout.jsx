import {HashRouter,Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/about';
import Login from '../Pages/Login';
import Error from '../Pages/Error';


function Applayout(){

    return(
        <HashRouter>
        <Routes>
            <Route path='/zustand/' element={<Home />}/>
            <Route path='/zustand/about' element={<About />}/>
            <Route path='/zustand/Login' element={<Login />}/>
            <Route path='*' element={<Error />}/>
        </Routes>
        </HashRouter>
    )
}
export default Applayout;   