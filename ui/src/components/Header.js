import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo';

const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colorPrimary};
  display: flex;
  justify-content: flex-start;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  @media only screen and (min-width: 992px) {
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 40px;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
    </HeaderStyled>
  );
};

export default Header;
