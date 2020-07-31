import React from 'react';
import loginImg from '../../login.svg';

export class Register extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return <div className="base-container"ref={this.props.containerRef}>
            <div className="header">Register</div>
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
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" placeholder="Enter E-mail"/>   
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Enter Password"/>   
                        </div>
                    </div>
            </div>
            <div className="footer">
                <button type ="button" className="btn">Register</button>
            </div>
        </div>
    }
}

