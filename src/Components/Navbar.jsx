import './Navbar.css'
import {Link} from 'react-router-dom'


function Navbar(){


return(<>

<ul className="nav nav-tabs justify-content-end mx-3 my-2 ">

    <li className="nav-item"><Link className='nav-link' aria-current='page' to={'/zustand/'}>Home</Link></li>

    <li className="nav-item"><Link className='nav-link' aria-current='page' to={'/zustand/about'}>About</Link></li>

    <li className="nav-item"><Link className='nav-link' aria-current='page' to={'/zustand/Login'}>Login</Link></li>

</ul>
</>)}
export default Navbar;