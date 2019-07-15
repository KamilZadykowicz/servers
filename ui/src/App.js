import React, {Component} from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/Header';
import {fetchServers} from 'helpers';

class App extends Component{
  state = {
    servers: []
  }
  componentDidMount() {
    fetchServers()
    .then(servers => {
      this.setState({
        servers
      })
    })
  }
  render(){
    return (
      <>
        <GlobalStyle/>
        <Header/>
      </>
    )
  }
};

export default App;
