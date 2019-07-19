import React from 'react';
import styled from 'styled-components';
import magnifier from 'assets/magnifying-glass.svg';

const StyledInput = styled.input`
  background: none;
  border: 2px solid #d4d7e1;
  font-weight: ${({ theme }) => theme.fontBold};
  color: ${({ theme }) => theme.colorSecondary};
  font-family: 'Open Sans', sans-serif;
  outline: none;
  background-image: url(${magnifier});
  background-repeat: no-repeat;
  background-size: 1.2em;
  background-position: 5% 50%;
  border-radius: 15px;
  font-size: 10px;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  width: 140px;
  transition: box-shadow 0.3s;
  &::placeholder {
    color: #a9aec1;
    font-weight: 400;
  }
  &:focus {
    box-shadow: 0px 0px 5px 3px #d4d7e1;
  }
  @media only screen and (min-width: 992px) {
    border-radius: 20px;
    font-size: 1.4rem;
    padding-left: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    width: 240px;
  }
`;

const Filter = ({ filteredName, handleFilterPosition }) => {
  return (
    <StyledInput
      onChange={handleFilterPosition}
      value={filteredName}
      placeholder="Search"
      type="text"
    />
  );
};

export default Filter;
