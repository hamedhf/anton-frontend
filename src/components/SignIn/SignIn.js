import React from 'react';
import './SignIn.css';

class SignIn extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
    };
		this.onRouteChange = this.props.onRouteChange;
	}

	onEmailChange = (event) =>{
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) =>{
		this.setState({password: event.target.value});
	}

	logIn = () =>{
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(response => {
			if(response.status === 400){
				throw new Error('failed to sign in.' + response.statusText);
			}else{
				return response.json();
			}
		})
		.then(user => {
			this.props.loadUser(user);
			this.props.onRouteChange('home');
		})
		.catch(err => console.log(err));
	}

	render(){
		const {onRouteChange} = this.props;

		return(
			<div className="center sn-container">
				<form >
					<p className='si-title'>Welcome</p>
					<input type="email" placeholder="Email" onChange={this.onEmailChange}/><br/>
					<input type="password" placeholder="Password" onChange={this.onPasswordChange}/><br/>
					<input type="button" value="Sign in" onClick={this.logIn}/><br/>
					<p className='si-register' onClick={() => onRouteChange('register')}>Register</p>
				</form>
			</div>
		);
	}
};

export default SignIn;