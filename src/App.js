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

let thisProxy;

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      boxes: []
    };
    thisProxy = this;
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById('inputImage');
    const widthRatio = image.width / image.naturalWidth;
    const heightRatio = image.height / image.naturalHeight;
    return {
      top: data.faceRectangle.top * heightRatio,
      right: image.width - (data.faceRectangle.left + data.faceRectangle.width) * widthRatio,
      bottom: image.height - (data.faceRectangle.top + data.faceRectangle.height) * heightRatio,
      left: data.faceRectangle.left * widthRatio
    };
  }

  displayFaceBoxes = (boxes) => {
    this.setState({boxes});
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input});

    //Api
    try{
      const data = JSON.stringify({
        "url": this.state.input
      });

      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          const response = JSON.parse(this.responseText);
          console.log(response);
          const boxes = response.map(item => thisProxy.calculateFaceLocation(item));
          thisProxy.displayFaceBoxes(boxes);
        }
      });

      xhr.open("POST", "https://microsoft-face1.p.rapidapi.com/detect?returnFaceId=true&recognitionModel=recognition_01&returnFaceLandmarks=true&detectionModel=detection_01&returnFaceAttributes=age");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("x-rapidapi-key", "43cff4f655mshb124a92a2258973p1b3f34jsn77f7956973fe");
      xhr.setRequestHeader("x-rapidapi-host", "microsoft-face1.p.rapidapi.com");

      xhr.send(data);
    }catch(err){
      console.log("sth went wrong!");
    }
  }

  render(){
    return (
      <>
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition boxes={this.state.boxes} imageUrl={this.state.imageUrl}/>
      </>
    );
  }
}

export default App;
