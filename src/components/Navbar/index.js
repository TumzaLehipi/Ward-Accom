import React, {useState} from 'react';

import {FaBars, FaTimes} from 'react-icons/fa';

import {IconContext} from 'react-icons/lib';

import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon,
    MobileIcon
}  from './styles';


const Navbar = () => {

    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click   ); 
    return (
        <React.Fragment>
            <IconContext.Provider value = {{color : '#fff'}}>
            <Nav>
               <NavbarContainer>
                   <NavLogo to ='/'>
                        <NavIcon/>
                            WARD-ACCOM
                   </NavLogo>
                    <MobileIcon onClick = {handleClick}>
                        {click ? <FaTimes/>: <FaBars/>}
                   </MobileIcon>
               </NavbarContainer>
            </Nav>   
            </IconContext.Provider>
        </React.Fragment>
    );
}

export default Navbar
