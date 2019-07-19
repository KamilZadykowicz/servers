import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/Header';
import TopBar from 'components/TopBar';
import Table from 'components/Table';
import { fetchServers, turnOnServer, turnOffServer } from 'helpers';
import { theme } from 'theme/mainTheme';

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
    serversInit: [],
    servers: [],
    filteredName: '',
  };

  componentDidMount() {
    fetchServers().then(servers => {
      this.setState({
        servers,
        serversInit: servers,
      });
    });
  }

  handleFilterPosition = event => {
    const filteredName = event.target.value;
    const { serversInit } = this.state;
    const servers = serversInit.filter(
      server => server.name.toLowerCase().indexOf(filteredName.toLowerCase().trim()) > -1,
    );
    this.setState({
      filteredName,
      servers,
    });
  };

  /* eslint-disable no-param-reassign */
  handleTurnOnServer = id => {
    turnOnServer(id).then(resp => {
      const { servers, serversInit } = this.state;

      const updatedServers = servers.map(server => {
        if (server.id === resp.id) {
          server.status = resp.status;
        }
        return server;
      });
      const updatedInitServers = serversInit.map(server => {
        if (server.id === resp.id) {
          server.status = resp.status;
        }
        return server;
      });
      this.setState({
        servers: updatedServers,
        serversInit: updatedInitServers,
      });
    });
  };
  /* eslint-enable no-param-reassign */

  /* eslint-disable no-param-reassign */
  handleTurnOffServer = id => {
    turnOffServer(id).then(resp => {
      const { servers, serversInit } = this.state;

      const updatedServers = servers.map(server => {
        if (server.id === resp.id) {
          server.status = resp.status;
        }
        return server;
      });
      const updatedInitServers = serversInit.map(server => {
        if (server.id === resp.id) {
          server.status = resp.status;
        }
        return server;
      });
      this.setState({
        servers: updatedServers,
        serversInit: updatedInitServers,
      });
    });
  };
  /* eslint-enable no-param-reassign */

  render() {
    const {
      filteredName,
      servers,
      servers: { length },
    } = this.state;
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <Header />
            <Container>
              <TopBar serversQty={length} handleFilterPosition={this.handleFilterPosition} />
              <Table
                servers={servers}
                filteredName={filteredName}
                handleTurnOnServer={this.handleTurnOnServer}
                handleTurnOffServer={this.handleTurnOffServer}
              />
            </Container>
          </>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
