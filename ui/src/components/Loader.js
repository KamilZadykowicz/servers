import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotating = keyframes`
    50% {
        transform: rotate(calc(180deg * var(--direction)));
    }

    100% {
        transform: rotate(calc(360deg * var(--direction)));
    }
`;

const LoaderWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 100px;
  font-size: 16px;
  box-sizing: border-box;
  border-top: 0.3em solid ${({ theme }) => theme.colorSecondary};
  border-radius: 50%;
  position: relative;
  animation: ${rotating} 2s ease-in-out infinite;
  --direction: 1;
  margin-top: 100px;
  &::before,
  ::after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    box-sizing: border-box;
    top: -0.2em;
  }
  &::before {
    border-top: 0.3em solid ${({ theme }) => theme.colorPrimary};
    transform: rotate(120deg);
  }
  &::after {
    border-top: 0.3em solid #d4d7e1;
    transform: rotate(240deg);
  }
`;
const LoaderSpan = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.colorPrimary};
  width: inherit;
  height: inherit;
  text-align: center;
  line-height: 100px;
  font-family: sans-serif;
  animation: ${rotating} 2s linear infinite;
  --direction: -1;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderSpan>Loading</LoaderSpan>
    </LoaderWrapper>
  );
};

export default Loader;
