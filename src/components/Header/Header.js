import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const logo = 'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.15752-9/277341436_5029136167122032_4856847535382054654_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFlWV3ZLz48eQg6Le3r9HVnawYMOiVPI7NrBgw6JU8js47sypWltdbfGrWvEeRpOfWV2BkL6-XWCNc7pKlXGau9&_nc_ohc=tR8tTM6TTgQAX8rgY0g&_nc_ht=scontent.fdac7-1.fna&oh=03_AVLMbkC9jhlTgYecyt-e89nw8qnYQ6RttItsWErVzQLaPA&oe=627500E7';

const Header = () => {
    const [dropdown, setDropdown] = useState(false);

    const showDropdownMenu = () => {
        const state = !dropdown;
        setDropdown(state);
    }
    const subMenuActivated = (activated = true) => {
        if (activated) {
            document.getElementById('portfolio-menu').style.color = '#58a0f7';
            showDropdownMenu();
        }
        else {
            document.getElementById('portfolio-menu').style.color = '#6d6c6c';
        }
    }
    return (
        <header>
            <img src={logo} alt="" />
            <div onMouseEnter={showDropdownMenu} onMouseLeave={showDropdownMenu} className='portfolio-tab'>
                <CustomLink to="/portfolio"><span id='portfolio-menu'>Portfolio</span></CustomLink>

                {
                    dropdown && <div onMouseLeave={showDropdownMenu} onClick={subMenuActivated} className='dropdown-menu'>
                        <CustomLink to="/street-photography">Street Photography</CustomLink>
                        <CustomLink to="/documentary-photography">Documentary Photography</CustomLink>
                        <CustomLink to="/travel-photography">Travel Photography</CustomLink>
                        <CustomLink to="/fine-art-photography">Fine Art Photography</CustomLink>
                        <CustomLink to="/nature-photography">Nature Photography</CustomLink>
                    </div>
                }
            </div>
            <CustomLink onClick={() => subMenuActivated(false)} to="/about">About</CustomLink>
            <CustomLink onClick={() => subMenuActivated(false)} to="/contact">Contact</CustomLink>
            <div>
                <a href='https://www.facebook.com/rhsumonphoto'><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                <a href="https://www.instagram.com/rhsumon90/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                <a href="https://twitter.com/rhsumonphoto"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                <a href="https://www.eyeem.com/rhsumon" id='eyeem'>E</a>
            </div>
        </header >
    );
};

export default Header;