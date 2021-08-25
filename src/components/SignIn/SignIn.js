import React from 'react';
import './SignIn.css';

class SignIn extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
    	};
		this.serverUrl = this.props.serverUrl;
	}

	onEmailChange = (event) =>{
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) =>{
		this.setState({password: event.target.value});
	}

	logIn = () =>{
		if(this.state.email === '' || this.state.password === ''){
			alert("please fill all fields!");
			return;
		}

		fetch(this.serverUrl + '/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(response => {
			if(response.status === 200){
				return response.json();
			}else{
				throw new Error('failed to sign in.' + response.statusText);
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
					<input type="email" placeholder="Email" onChange={this.onEmailChange} required/><br/>
					<input type="password" placeholder="Password" onChange={this.onPasswordChange} required/><br/>
					<input type="button" value="Sign in" onClick={this.logIn}/><br/>
					<p className='si-register' onClick={() => onRouteChange('register')}>Register</p>
				</form>
			</div>
		);
	}
};

export default SignIn;