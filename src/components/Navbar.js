import React from 'react'
import BurgerLogo from '../assets/burgerlogo.png';
import {Link} from 'react-router-dom';
import '../style/navbar.css';


function Navbar() {
  return (
    <div>
        <div className='navbar'>
            <div className='main'>
                <img src={BurgerLogo} alt='' />
                <div className='mainlink'>
                    <Link to={'/'}>Anasayfa</Link>
                    <Link to={'/menu'}>menu</Link>
                    <Link to={'/about'}>Hakkımızda</Link>
                    <Link to={'/contant'}>İletişim</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
