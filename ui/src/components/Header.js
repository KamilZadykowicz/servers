import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo';

const HeaderStyled = styled.header`
  background-color: #494e61;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 42px;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
    </HeaderStyled>
  );
};

export default Header;
