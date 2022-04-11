import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    const logo = 'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.15752-9/277341436_5029136167122032_4856847535382054654_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFlWV3ZLz48eQg6Le3r9HVnawYMOiVPI7NrBgw6JU8js47sypWltdbfGrWvEeRpOfWV2BkL6-XWCNc7pKlXGau9&_nc_ohc=tR8tTM6TTgQAX8rgY0g&_nc_ht=scontent.fdac7-1.fna&oh=03_AVLMbkC9jhlTgYecyt-e89nw8qnYQ6RttItsWErVzQLaPA&oe=627500E7';
    return (
        <header>
            <img src={logo} alt="" />
            <CustomLink to="/portfolio">Portfolio</CustomLink>
            <CustomLink to="/street-photography">Street Photography</CustomLink>
            <CustomLink to="/documentary-photography">Documentary Photography</CustomLink>
            <CustomLink to="/travel-photography">Travel Photography</CustomLink>
            <CustomLink to="/fine-art-photography">Fine Art Photography</CustomLink>
            <CustomLink to="/nature-photography">Nature Photography</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
        </header >
    );
};

export default Header;