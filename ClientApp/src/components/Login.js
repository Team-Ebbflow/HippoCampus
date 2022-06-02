import React, { Component } from 'react';

export class Login extends Component {
    static displayName = Login.name;

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h1>Login</h1>

                <input type="text" name="username" placeholder="Username" required></input>
                <input type="password" name="password" placeholder="Password" required></input>
                <input type="submit" value="Login"></input> 
            </div>
        )
    }
}