import './Navbar.css'
import {Link} from 'react-router-dom'


function Navbar(){


return(<>

<ul className="nav nav-tabs justify-content-end mx-3 my-2 ">

    <li className="nav-item"><Link className='nav-link' aria-current='page' to={'/'}>Home</Link></li>

    <li className="nav-item"><Link className='nav-link' aria-current='page' to={'/about'}>About</Link></li>

    <li className="nav-item"><Link className='nav-link' aria-current='page' to={'/Login'}>Login</Link></li>

</ul>
</>)}
export default Navbar;