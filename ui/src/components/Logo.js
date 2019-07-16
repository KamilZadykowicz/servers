import React from 'react';
import styled from 'styled-components';
import logoImg from 'assets/logo.svg';

const LogoWrapper = styled.div`
  border-right: 2px solid #757b8f;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
`;

const LogoText = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  /* letter-spacing: -5px; */
  text-align: center;
`;

const LogoImg = styled.img`
  display: inline-block;
  width: 17px;
  height: 17px;
  margin-right: 12px;
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
