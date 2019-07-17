import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/Header';
import TopBar from 'components/TopBar';
import Table from 'components/Table';
import { fetchServers } from 'helpers';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  @media only screen and (min-width: 992px) {
    max-width: 90%;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 60%;
    margin-left: 18%;
    margin-right: 22%;
  }
`;

class App extends Component {
  state = {
    servers: [],
    filteredName: '',
  };

  componentDidMount() {
    fetchServers().then(servers => {
      this.setState({
        servers,
      });
    });
  }

  handleFilterPosition = event => {
    const filteredName = event.target.value;
    this.setState({
      filteredName,
    });
  };

  render() {
    const {
      filteredName,
      servers,
      servers: { length },
    } = this.state;
    return (
      <>
        <GlobalStyle />
        <Header />
        <Container>
          <TopBar
            serversQty={length}
            filteredName={filteredName}
            handleFilterPosition={this.handleFilterPosition}
          />
          <Table servers={servers} filteredName={filteredName} />
        </Container>
      </>
    );
  }
}

export default App;
