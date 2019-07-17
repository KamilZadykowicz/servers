import React from 'react';
import styled from 'styled-components';
import magnifier from 'assets/magnifying-glass.svg';

const StyledInput = styled.input`
  background-color: transparent;
  border: 2px solid #d4d7e1;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #9ca7d3;
  font-family: 'Open Sans', sans-serif;
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  outline: none;
  background-image: url(${magnifier});
  background-repeat: no-repeat;
  background-size: 1.2em;
  background-position: 5% 50%;
  &::placeholder {
    color: #a9aec1;
    font-weight: 400;
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
