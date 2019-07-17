import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: #ffffff;
  position: absolute;
  right: 0;
  top: 0;
  width: 120px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const StyledBtn = styled.p`
  background-color: #ffffff;
  color: #494e61;
  font-size: 13px;
  font-weight: 600;
  padding: 20px 20px;
  &:hover {
    background-color: #f2f3f6;
    cursor: pointer;
  }
`;

const ItemEdit = ({ status, showEditServer }) => {
  return (
    <StyledWrapper onBlur={showEditServer}>
      {status === 'ONLINE' ? (
        <>
          <StyledBtn onClick={showEditServer}>Turn off</StyledBtn>
          <StyledBtn onClick={showEditServer}>Reboot</StyledBtn>
        </>
      ) : (
        <StyledBtn onClick={showEditServer}>Turn on</StyledBtn>
      )}
    </StyledWrapper>
  );
};

export default ItemEdit;
