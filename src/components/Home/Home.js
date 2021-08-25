import React from 'react';
import Navigation from './../Navigation/Navigation';
import Logo from './../Logo/Logo';
import ImageLinkForm from './../ImageLinkForm/ImageLinkForm';
import Rank from './../Rank/Rank';
import FaceRecognition from './../FaceRecognition/FaceRecognition';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      boxes: []
    };
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById('inputImage');
    return {
      top: data.top_row * image.height,
      right: image.width - data.right_col * image.width,
      bottom: image.height - data.bottom_row * image.height ,
      left: data.left_col * image.width
    };
  }

  displayFaceBoxes = (boxes) => {
    this.setState({boxes});
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input});

    //Api
    fetch('http://localhost:3000/image', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageUrl: this.state.input,
        id: this.props.user.id
      })
    })
    .then(res => {
      if(res.status === 200){
        return res.json();
      }else{
        throw new Error("failed to fetch boxes" + res.statusText);
      }
    })
    .then(data =>{
      const {id, name, email, joined} = this.props.user;
      this.props.loadUser({
        id,
        name,
        email,
        entries: data.entries,
        joined
      });

      let boxes = data.boxes.map(box => this.calculateFaceLocation(box));
      this.displayFaceBoxes(boxes);
    })
    .catch(err => console.log(err));
  }

  render(){
    const {name, entries} = this.props.user;
    
    return(
      <>
        <Navigation onRouteChange={this.props.onRouteChange}/>
        <Logo />
        <Rank name={name} entries={entries}/>
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition boxes={this.state.boxes} imageUrl={this.state.imageUrl}/>
      </>
    );
  }
};

export default Home;