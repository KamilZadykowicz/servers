import React, { Component } from 'react';
import ItemEdit from 'components/ItemEdit';
import styled, { css } from 'styled-components';
import circle from 'assets/circle.svg';
import cross from 'assets/cross.svg';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 2px solid #ededf0;
  position: relative;
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
const StyledName = styled.p`
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontBold};
  @media only screen and (min-width: 992px) {
    font-size: 1.3rem;
  }
`;
const StyledStatus = styled.p`
  color: ${({ theme }) => theme.colorStatus};
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontBold};
  ${({ status }) =>
    status === 'ONLINE' &&
    css`
      color: ${({ theme }) => theme.colorStatus};
      &:before {
        content: '';
        background-image: url(${circle});
        background-size: cover;
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-right: 10px;
      }
    `}
  ${({ status }) =>
    status === 'OFFLINE' &&
    css`
      color: ${({ theme }) => theme.colorPrimary};
      &:before {
        content: '';
        background-image: url(${cross});
        background-size: cover;
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-right: 10px;
      }
    `}
  ${({ status }) =>
    status === 'REBOOTING' &&
    css`
      &:after {
        content: '...';
      }
    `}
  @media only screen and (min-width: 992px) {
    font-size: 1.3rem;
  }
`;
const StyledBtn = styled.button`
  display: block;
  border-radius: 50%;
  border: none;
  width: 37px;
  height: 37px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
  &:hover {
    background-color: #f2f3f6;
    cursor: pointer;
  }
`;
const StyledBtnIcon = styled.span`
  background-color: ${({ theme }) => theme.colorSecondary};
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin-left: 2px;
  margin-right: 2px;
`;

class TableItem extends Component {
  state = {
    edit: false,
  };

  showEditServer = () => {
    this.setState(prevState => ({
      edit: !prevState.edit,
    }));
  };

  hideEditServer = () => {
    this.setState({
      edit: false,
    });
  };

  render() {
    const { name, status } = this.props;
    const { edit } = this.state;
    return (
      <StyledRow>
        <StyledCol1>
          <StyledName>{name}</StyledName>
        </StyledCol1>
        <StyledCol2>
          <StyledStatus status={status}>{status}</StyledStatus>
        </StyledCol2>
        <StyledCol3>
          <StyledBtn onClick={this.showEditServer}>
            <StyledBtnIcon />
            <StyledBtnIcon />
            <StyledBtnIcon />
          </StyledBtn>
        </StyledCol3>
        {edit && status !== 'REBOOTING' ? (
          <ItemEdit showEditServer={this.showEditServer} status={status} />
        ) : null}
      </StyledRow>
    );
  }
}

export default TableItem;
