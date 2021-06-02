import styled from 'styled-components';

import {RiHomeSmileFill} from 'react-icons/ri';

import {Link} from 'react-router-dom'

import {Container} from '../../styles/global';

export const Nav = styled.nav`

    background : #161A27;
    height : 80px;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 1.2rem;
    position : sticky;
    top : 0;
    z-index : 999;
    color : #fff;

`;

export const NavbarContainer = styled(Container)`

    display : flex;
    justify-content : space-between;
    height : 80px;

    ${Container}
`;

export const NavLogo = styled(Link)`

    color  : #fff;
    justify-content : flex-start;
    cursor : pointer;
    text-decoration : none;
    font-size : 2rem;
    display : flex;
    align-items : center;
    
`;

export const NavIcon = styled(RiHomeSmileFill)`

    margin-right : .5rem;
    color : #fff;

`;