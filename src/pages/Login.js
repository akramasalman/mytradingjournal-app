
import React from 'react';

function Login() {
  return (
    <div className="auth-page">
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="publish-btn">Login</button>
    </div>
  );
}

export default Login;
