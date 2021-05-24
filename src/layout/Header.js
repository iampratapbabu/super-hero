import React from 'react'
import{Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
            

            <nav>
            <div class="nav-wrapper">
            <Link to='/' class="brand-logo">Heroes Bay</Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">

            <li><Link to='/superhero'>SuperHero</Link></li>
            <li><Link to='/villain'>Villain</Link></li>
            <li><Link to='/about'>About</Link></li>
            </ul>
            </div>
            </nav>

           
        </div>
    )
}

export default Header
