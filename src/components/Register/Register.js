import React from 'react';
import './Register.css';

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		};
	}

	onNameChange = (event) =>{
		this.setState({name: event.target.value});
	}

	onEmailChange = (event) =>{
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) =>{
		this.setState({password: event.target.value});
	}

	signUp = () =>{
		if(this.state.name === '' || this.state.email === '' || this.state.password === ''){
			alert("please fill all fields!");
			return;
		}

		fetch(this.serverUrl + '/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(response => {
			if(response.status === 200){
				return response.json();
			}else{
				throw new Error('failed to sign up.' + response.statusText);
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
				<form id='r-form' >
					<p className='si-title' id='r-title'>Register</p>
					<input type="text" placeholder="Name" onChange={this.onNameChange} required/><br/>
					<input type="email" placeholder="Email" onChange={this.onEmailChange} required/><br/>
					<input type="password" placeholder="Password" onChange={this.onPasswordChange} required/><br/>
					<input type="button" value="Register" onClick={this.signUp}/><br/>
					<p className='si-register' onClick={() => onRouteChange('signin')}>Back</p>
				</form>
			</div>
		);
	}
}

export default Register;