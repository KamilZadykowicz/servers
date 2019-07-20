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

const ItemEdit = ({
  id,
  status,
  showEditServer,
  handleTurnOnServer,
  handleTurnOffServer,
  handleRebootServer,
}) => {
  const turnOn = () => {
    handleTurnOnServer(id);
    showEditServer();
  };
  const turnOff = () => {
    handleTurnOffServer(id);
    showEditServer();
  };
  const reboot = () => {
    handleRebootServer(id);
    showEditServer();
  };
  return (
    <StyledWrapper onBlur={showEditServer}>
      {status === 'ONLINE' ? (
        <>
          <StyledBtn onClick={turnOff}>Turn off</StyledBtn>
          <StyledBtn onClick={reboot}>Reboot</StyledBtn>
        </>
      ) : (
        <StyledBtn onClick={turnOn}>Turn on</StyledBtn>
      )}
    </StyledWrapper>
  );
};

export default ItemEdit;
