import React from 'react';
import Particles from 'react-particles-js';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 750
      }
    }
  }
};


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      route: 'signin',
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    };
  }

  onRouteChange = (route) => {
    this.setState({route});
  }

  loadUser = (user) =>{
    this.setState({user});
  }

  render(){
    let page;
    if(this.state.route === 'signin') {
      page = (<SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>);
    } 
    else if(this.state.route === 'register'){
      page = (<Register onRouteChange={this.onRouteChange}/>)
    } 
    else if(this.state.route === 'home'){
      page = (<Home onRouteChange={this.onRouteChange} user={this.state.user} loadUser={this.loadUser}/>);  
    }

    return (
      <>
        <Particles className='particles' params={particlesOptions} />
        {page}
      </>
    );
  }
}

export default App;
