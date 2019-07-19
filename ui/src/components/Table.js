import React from 'react';
import styled from 'styled-components';
import TableItem from 'components/TableItem';

const StyledTable = styled.div`
  background-color: #ffffff;
`;
const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 2px solid #ededf0;
`;
const StyledCol1 = styled.div`
  width: 40%;
  flex-basis: 40%;
  @media only screen and (min-width: 992px) {
    width: 25%;
    flex-basis: 25%;
  }
`;
const StyledCol2 = styled.div`
  width: 40%;
  flex-basis: 40%;
  text-align: right;
  @media only screen and (min-width: 992px) {
    width: 10%;
    flex-basis: 10%;
  }
`;
const StyledCol3 = styled.div`
  width: 20%;
  flex-basis: 20%;
  @media only screen and (min-width: 992px) {
    width: 65%;
    flex-basis: 65%;
  }
`;
const StyledTitle = styled.p`
  color: ${({ theme }) => theme.colorSecondary};
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontBold};
  @media only screen and (min-width: 992px) {
    font-size: 1.4rem;
  }
`;

const Table = ({ servers }) => {
  const tableShow = () => {
    return servers.map(server => (
      <TableItem key={server.id} id={server.id} name={server.name} status={server.status} />
    ));
  };

  return (
    <StyledTable>
      <StyledRow>
        <StyledCol1>
          <StyledTitle>NAME</StyledTitle>
        </StyledCol1>
        <StyledCol2>
          <StyledTitle>STATUS</StyledTitle>
        </StyledCol2>
        <StyledCol3 />
      </StyledRow>
      {tableShow()}
    </StyledTable>
  );
};

export default Table;
