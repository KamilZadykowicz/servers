import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/Header';
import TopBar from 'components/TopBar';
import Table from 'components/Table';
import Loader from 'components/Loader';
import { fetchServers, turnOnServer, turnOffServer, rebootServer, fetchOneServer } from 'helpers';
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
    loading: false,
    failedLoading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetchServers().then(servers => {
      if (servers) {
        this.setState({
          servers,
          serversInit: servers,
        });
      } else {
        this.setState({
          failedLoading: true,
        });
      }
      this.setState({
        loading: false,
      });
    });
  }

  /* eslint-disable no-param-reassign */
  handleCheckOneServer = id => {
    fetchOneServer(id).then(response => {
      if (response) {
        const { servers, serversInit } = this.state;
        const updatedServers = servers.map(server => {
          if (server.id === response.id) {
            server.status = response.status;
          }
          return server;
        });
        const updatedInitServers = serversInit.map(server => {
          if (server.id === response.id) {
            server.status = response.status;
          }
          return server;
        });
        this.setState({
          servers: updatedServers,
          serversInit: updatedInitServers,
        });
      }
    });
  };

  handleUpdateServers = resp => {
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
  };

  handleFilterPosition = event => {
    const { serversInit } = this.state;
    if (serversInit) {
      const filteredName = event.target.value;
      const servers = serversInit.filter(
        server => server.name.toLowerCase().indexOf(filteredName.toLowerCase().trim()) > -1,
      );
      this.setState({
        filteredName,
        servers,
      });
    }
  };

  handleTurnOnServer = id => {
    turnOnServer(id).then(resp => {
      if (resp) {
        this.handleUpdateServers(resp);
      } else {
        this.handleCheckOneServer(id);
      }
    });
  };

  handleTurnOffServer = id => {
    turnOffServer(id).then(resp => {
      if (resp) {
        this.handleUpdateServers(resp);
      } else {
        this.handleCheckOneServer(id);
      }
    });
  };

  handleRebootServer = id => {
    rebootServer(id).then(resp => {
      if (resp) {
        this.handleUpdateServers(resp);
      } else {
        this.handleCheckOneServer(id);
      }
      this[`interval${id}`] = setInterval(() => this.pingStatus(id), 1000);
    });
  };

  pingStatus = id => {
    fetchOneServer(id).then(resp => {
      const { servers, serversInit } = this.state;
      if (resp && resp.status !== 'REBOOTING') {
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
        clearInterval(this[`interval${id}`]);
      }
    });
  };
  /* eslint-enable no-param-reassign */

  render() {
    const {
      filteredName,
      loading,
      failedLoading,
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
              {loading && <Loader />}
              {failedLoading && <p>Network Error.</p>}
              {servers.length ? (
                <Table
                  servers={servers}
                  filteredName={filteredName}
                  handleTurnOnServer={this.handleTurnOnServer}
                  handleTurnOffServer={this.handleTurnOffServer}
                  handleRebootServer={this.handleRebootServer}
                />
              ) : null}
            </Container>
          </>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
