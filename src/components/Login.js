import React from 'react';
import { NavLink } from 'react-router-dom';
const Login =()=>{

return(

<div className="login-form">
  <form>
    <h1>Login</h1>
    <div className="content">
      <div className="input-field">
        <input type="email" placeholder="Email" value="user"/>
      </div>
      <div className="input-field">
        <input type="password" placeholder="Password" value="user2345" />
      </div>
     
    </div>
    <div className="action">
      
    <NavLink to="/StartQuiz" className="link button">Login</NavLink>
    </div>
  </form>
</div>
)
}
export default Login;