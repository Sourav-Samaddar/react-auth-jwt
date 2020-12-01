import React, { Component } from 'react'
import UserService from "../services/UserService";

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName: '',
             password: ''
        }
    }
    

    handleSubmit = e => {
        e.preventDefault();
        console.log("Check the value:"+this.state.userName+" "+this.state.password);
        let loginDetails = {
            userName: this.state.userName,
            password: this.state.password
        }
        UserService.login(loginDetails).then(res => {
            console.log("JWT:"+res.data);
            localStorage.setItem("JWTToken",res.data);
            this.props.history.push('/');
        }).catch(err => {
            console.log("error:"+err);
        });
    }
    onUserNameChange = e => {
        this.setState({userName: e.target.value});
    }
    onPasswordChange = e => {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Email" 
                    onChange={this.onUserNameChange}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    onChange={this.onPasswordChange}/>
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
        )
    }
}
