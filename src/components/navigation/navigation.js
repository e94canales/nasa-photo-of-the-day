import React from 'react';
import '../navigation/navigation.css';
import logo from '../../components/images/spacelink.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import userImage from '../images/user.jpg'

const rocket = <FontAwesomeIcon icon={faRocket} />

const Nav = (props) => {

    return (
        <nav>
            <div className='logoContainer'>
                <img src={logo} className='logo' alt='logo'/>
                <p className='rocket'>{rocket}</p>
            </div>

            <div className='linksContainer'>
                <a className='a' href='#'>Home</a>
                <a className='a' href='#'>About</a>
                <a className='a' href='#'>Contact</a>
                <a className='a' href='#'>News</a>

                <form className='searchContainer'>
                    <input className='search' type="text" placeholder='Search'></input>
                </form>
                <img className='userAva' src={userImage} alt='user'></img>

            </div>


        </nav>
    )
}

export default Nav;
