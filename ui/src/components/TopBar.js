import React from 'react';
import styled from 'styled-components';
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
	color: #494E61;
	font-size: 18px;
	font-weight: 600;
    @media only screen and (min-width: 992px) {
        font-size: 21px;
    }
`;
const TopBarText = styled.p`
    color: #494E61;
	font-size: 13px;
    @media only screen and (min-width: 992px) {
        font-size: 15px;
    }
`;

const TopBar = ({serversQty}) => {
    return (
        <TopBarWrapper>
            <TopBarLeft>
                <TopBarTitle>
                    Servers
                </TopBarTitle>
                <TopBarText>
                    Number of elements: {serversQty}
                </TopBarText>
            </TopBarLeft>
            <TopBarRight>
                input
            </TopBarRight>
        </TopBarWrapper>
    )
}

export default TopBar;