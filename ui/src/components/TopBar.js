import React from 'react';
import styled from 'styled-components';
import Filter from 'components/Filter';
// import magnifying from 'assets/magnifying-glass.svg';

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 15px;
`;
const TopBarLeft = styled.div`
  display: block;
`;
const TopBarRight = styled.div`
  display: block;
`;

const TopBarTitle = styled.h3`
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontBold};
  @media only screen and (min-width: 992px) {
    font-size: 2.1rem;
  }
`;
const TopBarText = styled.p`
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 1.2rem;
  @media only screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

const TopBar = ({ serversQty, filteredQty, handleFilterPosition }) => {
  return (
    <TopBarWrapper>
      <TopBarLeft>
        <TopBarTitle>Servers</TopBarTitle>
        <TopBarText>
          Number of elements: {filteredQty !== serversQty ? filteredQty : null} {serversQty}
        </TopBarText>
      </TopBarLeft>
      <TopBarRight>
        <Filter handleFilterPosition={handleFilterPosition} />
      </TopBarRight>
    </TopBarWrapper>
  );
};

export default TopBar;
