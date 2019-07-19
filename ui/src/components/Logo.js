import React from 'react';
import styled from 'styled-components';
import logoImg from 'assets/logo.svg';

const LogoWrapper = styled.div`
  border-right: 2px solid #757b8f;
  display: flex;
  align-items: center;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  @media only screen and (min-width: 992px) {
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const LogoText = styled.p`
  font-family: Montserrat;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  @media only screen and (min-width: 992px) {
    font-size: 1.4rem;
  }
`;

const LogoImg = styled.img`
  display: inline-block;
  width: 14px;
  margin-right: 10px;
  @media only screen and (min-width: 992px) {
    width: 17px;
    margin-right: 12px;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg src={logoImg} alt="logo" />
      <LogoText>Recruitment task</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
