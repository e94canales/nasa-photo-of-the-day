import React from 'react';
import logo from '../../components/images/spacelink.png'

const Nav = (props) => {

    return (
        <nav>
            <div className='logoContainer'>
                <img src={logo} className='logo' alt='logo'/>
            </div>

            <div className='linksContainer'>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
            </div>

            <form className='searchContainer'>
                <input type="text" value="Search"></input>
            </form>
        </nav>
    )
}

export default Nav;
