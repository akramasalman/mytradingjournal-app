
import React from 'react';

function Register() {
  return (
    <div className="auth-page">
      <h2>Register</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="publish-btn">Register</button>
    </div>
  );
}

export default Register;
