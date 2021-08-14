import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 750
      }
    },
  },
}

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input: ''
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {
    console.log('click');
  }

  render(){
    return (
      <>
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
      </>
    );
  }
}

export default App;
