import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const logo = 'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.15752-9/275432982_387838132936938_3903255083892661873_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEGz0WbhDkRe_loM375rigX6F-a7edxYqHoX5rt53FioWymuEq3Pd3KwSVq5h5mm69XC03CM5A671bZD6J-e8nn&_nc_ohc=fkghoU8W7SsAX-q1nlJ&_nc_ht=scontent.fdac7-1.fna&oh=03_AVLIHjljVyvjv85R8Lyu1VPiM45Kal3By4wE0sMk2ixe-w&oe=62784404';

const Header = () => {
    const [dropdown, setDropdown] = useState(false);
    const [clicked, setClicked] = useState(false);


    const barButtonClicked = (insideButton) => {
        const navTab = document.getElementById('nav-tab');
        let state = !clicked;
        setClicked(state);
        if (state) {
            navTab.style.display = 'block';
        }
        else {
            navTab.style.display = 'none';
        }
    }

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
            <div className="menu-bar">
                {
                    clicked ? <FontAwesomeIcon onClick={barButtonClicked} icon={faXmark}></FontAwesomeIcon>
                        :
                        <FontAwesomeIcon onClick={barButtonClicked} icon={faBars}></FontAwesomeIcon>
                }
            </div>
            <div className='nav-tabs' id='nav-tab'>
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
            </div>
        </header >
    );
};

export default Header;