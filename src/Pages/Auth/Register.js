import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import "../../Styles/AuthStyles.css";
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const user = {
        name,
        email,
        password
      };
      console.log("user",user);
      localStorage.setItem("user", JSON.stringify(user));
  
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
      alert("Registration successful!");
    };


  return (
    <Layout>
      <div className="container">
            <div className="row mt-5">
            <h5 className='text-center'>ABC BANK</h5>
            </div>
              <div className="row mt-5">
                  <div className="col-md-12">
                      <div className='form-container'>
                          <form onSubmit={handleSubmit}>
                              <h6>Create new account</h6>
                              <div className="mb-3 mt-4">
                                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                  <input type="text" className="form-control" placeholder='Enter name' 
                                  value={name}
                                  onChange={handleNameChange}
                                  id="" aria-describedby="emailHelp"/>
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="exampleInputPassword1" className="form-label">Email address</label>
                                  <input type="email" className="form-control" 
                                  value={email}
                                  onChange={handleEmailChange}
                                  placeholder='Enter email' id="exampleInputPassword1"/>
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                  <input type="password" placeholder='Enter password' 
                                  value={password}
                                  onChange={handlePasswordChange}
                                  className="form-control" id="exampleInputPassword1"/>
                              </div>
                              <div className="mb-3 form-check">
                                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                  <label className="form-check-label d-flex" htmlFor="exampleCheck1">Agree the <p className='link-primary mx-1'>terms and policy</p></label>
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
                <p className='form-bottom mt-3 d-flex justify-content-center'>Already have an account ? <NavLink to={"/"} className='link-primary mx-1'>Sign in</NavLink></p>
                </div>
              </div>
          </div>
    </Layout>
  )
}

export default Register