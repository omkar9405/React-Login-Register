import React from 'react';
import loginImg from '../../login.svg';

export class Login extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                    <div className="image">
                        <img src={loginImg} alt="Login Image"/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Enter Username"/>   
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Enter Password"/>   
                        </div>
                    </div>
            </div>
            <div className="footer">
                <button type ="button" className="btn">Login</button>
            </div>
        </div>
    }
}

