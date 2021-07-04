import React from 'react'
import "./register.css"
export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SocialApp</h3>
                    <span className="loginDesc">Connect with friends and the world around you on SocialApp</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="email" className="loginInput" />
                        <input placeholder="password" className="loginInput" />
                        <input placeholder="Conform password" className="loginInput" />
                        <button className="loginButton">SignUp</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
