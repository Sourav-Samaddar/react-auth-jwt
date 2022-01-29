import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserService from '../services/UserService';
export default class NavigationComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user: {},
             userName: this.props.match.params.userName
        }
    }

    handleAuthentication = () => {
        if(this.state.user){
            this.setState({
                user:{}
            })
            localStorage.setItem("JWTToken",{});
            this.props.history.push('/login');
        }
    }

    componentDidMount() {
        console.log("Navigation Component did mount:"+this.state.userName)
        let user = {
            "userName":this.state.userName
        }
        UserService.getUserDetails(user).then(res => {
            console.log("Hello user navigation:"+res.data.email)
            this.setState({
                user: res.data
            });
        }).catch(err => {
            console.log("Error Msg:"+err)
        });
    }
    
    render() {
        let username = this.state.user?.email;
        console.log("In navigation:"+username);
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <Link to={'/'} className="navbar-brand">Home</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                <Link to={!username && '/login'}>
                                    <div onClick={this.handleAuthentication} className="header__option">
                                        <span className="header__optionLineOne">
                                            Hello {username? username: 'Guest'}
                                        </span>
                                        <span className="header__optionLineTwo">
                                        {username? 'Sign Out':'Sign In'} 
                                        </span>
                                    </div>
                                </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/register'} className="nav-link">Sign up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
