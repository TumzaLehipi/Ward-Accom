import React from 'react';
import styled from 'styled-components';

export default function Header(props) {

  return (
    <Container>
      <brand>
          <logo>
            {props.logo}
          </logo>
          {props.children}
      </brand>
      <Menu>Menu</Menu>
    </Container>
  )
}

const Container  = styled.div`
  background: #F6B130;
  display: flexbox;
  height : 100px;
  padding: 40px;
`;

const brand = styled.div`
position : absolute;
margin-left 50px;
width: 200px;
border: 1px solid #2d2d2d;

`;

const Menu = styled.div`
  position: absolute;
  right : 50px;
  background: pink;
`;