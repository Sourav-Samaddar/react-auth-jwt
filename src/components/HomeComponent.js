import React, { Component } from 'react'
import UserService from '../services/UserService'

export default class HomeComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             user:{}
        }
    }
    

    componentDidMount() {
        let user = {
            "userName":"sourav"
        }
        UserService.getUserDetails(user).then(res => {
            console.log("Hello user:"+res.data.email)
            this.setState({
                user: res.data
            });
        }).catch(err => {
            console.log("Error Msg:"+err)
        });
    }

    render() {

        if(this.state.user.userName) {
            return (
                <div>
                    <h2>Welcome {this.state.user.userName}</h2>
                </div>
            )
        }

        return (
            <div>
                <h2>You are not logged in</h2>
            </div>
        )
    }
}

