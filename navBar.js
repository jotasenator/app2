import React from 'react';
import { NavLink } from 'react-router-dom'
import Me from './navbarPic'

const Navbar = () => {

    return (
        <nav className='navBar'>
            <ul>
                <div className='jotas'>
                    <li><p>Blog de j</p><p className='rotate'>oTa</p><p>s</p></li>
                </div>
                <li><NavLink exact to='/'>Inicio</NavLink></li>
                <li><NavLink to='/python'>Python</NavLink></li>
                <li><NavLink to='/javascript'>Javascript</NavLink></li>
                <div className='toRight'>
                    <li><NavLink to='/contacto'>Contáctame</NavLink></li>
                    <li><Me /></li>
                </div>

            </ul>
        </nav >

    )
}

export default Navbar