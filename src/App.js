import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
//import {ClarifaiStub, grpc} from 'clarifai-nodejs-grpc';

//const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call.
//const metadata = new grpc.Metadata();
//metadata.set("authorization", "Key {3427c2247db9410e88365ce36b50e1e7}");

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
      input: '',
      imageUrl: ''
    };
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input});
    // stub.PostModelOutputs(
    //   {
    //       // This is the model ID of a publicly available General model. You may use any other public or custom model ID.
    //       model_id: "aaa03c23b3724a16a56b629203edc62c",
    //       inputs: [{data: {image: {url: "https://samples.clarifai.com/dog2.jpeg"}}}]
    //   },
    //   metadata,
    //   (err, response) => {
    //     if (err) {
    //         console.log("Error: " + err);
    //         return;
    //     }

    //     if (response.status.code !== 10000) {
    //         console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
    //         return;
    //     }

    //     console.log("Predicted concepts, with confidence values:")
    //     for (const c of response.outputs[0].data.concepts) {
    //         console.log(c.name + ": " + c.value);
    //     }
    //   }
    // );
  }

  render(){
    return (
      <>
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </>
    );
  }
}

export default App;
