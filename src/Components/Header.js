import styled from "styled-components";
import React from 'react';

const Title = styled.h1`
font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  `
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function Header({ children, ...rest }) {
    return (
<Wrapper {...rest}> 
    <Title> {children} </Title>

    </Wrapper>
    )
}

export default Header;