import React from "react";

const Login = ({ logearse, isLogin }) => {
  return (
    <div>
      <h3>Login</h3>
      {isLogin ? <button onClick={logearse}>Log Out</button> : <button onClick={logearse}>Log In</button>}
    </div>
  );
};

export default Login;
