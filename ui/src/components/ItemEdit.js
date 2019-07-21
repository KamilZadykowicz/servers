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
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontBold};
  padding: 20px 20px;
  &:hover {
    background-color: #f2f3f6;
    cursor: pointer;
  }
`;

const CloseBtn = styled.button`
  display: block;
  width: 20px;
  height: 20px;
  background-color: #ff3322;
  color: #ffffff;
  font-size: 18px;
  position: absolute;
  right: -20px;
  top: 0;
  transition: transform 0.3s;
  &:hover {
    background-color: #570101;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const ItemEdit = ({
  id,
  status,
  handleCloseEdit,
  handleTurnOnServer,
  handleTurnOffServer,
  handleRebootServer,
}) => {
  const turnOn = () => {
    handleTurnOnServer(id);
    handleCloseEdit();
  };
  const turnOff = () => {
    handleTurnOffServer(id);
    handleCloseEdit();
  };
  const reboot = () => {
    handleRebootServer(id);
    handleCloseEdit();
  };

  return (
    <StyledWrapper>
      {status === 'ONLINE' ? (
        <>
          <StyledBtn onClick={turnOff}>Turn off</StyledBtn>
          <StyledBtn onClick={reboot}>Reboot</StyledBtn>
        </>
      ) : (
        <StyledBtn onClick={turnOn}>Turn on</StyledBtn>
      )}
      <CloseBtn onClick={handleCloseEdit}>X</CloseBtn>
    </StyledWrapper>
  );
};

export default ItemEdit;
