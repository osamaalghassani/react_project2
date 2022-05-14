import React ,{useEffect, useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';
import {MdFingerprint} from 'react-icons/md';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import {Link} from 'react-router-dom';
import { Button } from './Button';

function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);
    const handelClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    const showButton=()=>{
        if(window.innerWidth <=960)
        setButton(false);
        else setButton(true);
    };
    useEffect(()=>{
        showButton();
    },[]);  
    window.addEventListener('resize',showButton);
  return (

    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <div className='navbar'>
        <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <MdFingerprint className='navbar-icon' />

            Laviesh</Link>
            <div className='menu-icon' onClick={handelClick}>

                {click?<FaTimes/>:<FaBars/>}
            </div>
            <ul className={click?'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products </Link>
                </li>
                <li className='nav-btn'>
                    {button?(
                    <Link to='/sing-up'  className='btn-link'> <Button buttonStyle='btn--outline'>SING UP</Button> </Link>)
                    :(    <Link  to='/sing-up'  className='btn-link'>
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu} >SING in</Button></Link>)}
                </li>
            </ul>
        </div>
        </div>
        </IconContext.Provider></>
  )
}

export default Navbar;