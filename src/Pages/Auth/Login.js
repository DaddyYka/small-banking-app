import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import "../../Styles/AuthStyles.css";
import { NavLink, useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
  
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();

      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        alert("No user data found.");
        return;
      }

      const user = JSON.parse(storedUser);

      
      if (user.email !== email || user.password !== password) {
        alert("Invalid email or password.");
        return;
      }

      alert("Login successful!");
      setEmail("");
      setPassword("");

      const name = user.name
      const loggedIn = {
        name,
        email,
        password
      };
      console.log("Log",loggedIn);
      localStorage.setItem("LoggedIn", JSON.stringify(loggedIn));
      
      navigate("/home");
    //   props.onLogin();
    };
    

  return (
      <Layout title={"login"}>
          <div className="container">
            <div className="row mt-5">
            <h5 className='text-center'>ABC BANK</h5>
            </div>
              <div className="row mt-5">
                  <div className="col-md-12">
                      <div className='form-container'>
                          <form onSubmit={handleSubmit}>
                              <h6>Login to your account</h6>
                              <div className="mb-3 mt-4">
                                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                  <input type="email" placeholder='Enter email' className="form-control"
                                  value={email}
                                  onChange={handleEmailChange}
                                  id="exampleInputEmail1" aria-describedby="emailHelp" />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                  <input type="password" placeholder='Enter password' className="form-control"
                                  value={password}
                                  onChange={handlePasswordChange}
                                  id="exampleInputPassword1" />
                              </div>
                              <div className="mb-3 form-check">
                                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                  <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                              </div>
                              <div className='d-grid  mx-auto'>
                              <button type="submit" className="btn btn-primary">Sign in</button>
                              </div>
                          </form>
                      </div> 
                  </div>
              </div>
              <div className="row">
                <div>
                <p className='form-bottom mt-3 d-flex justify-content-center'>Don't have account yet ? <NavLink className='link-primary mx-1' to={"/register"}>Signup</NavLink></p>
                </div>
              </div>
          </div>
      </Layout>
  )
}

export default Login