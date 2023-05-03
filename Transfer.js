import React, { useState } from 'react';
import Layout from '../Layout/Layout';

const Transfer = () => {
 
  const [inputValue, setInputValue] = useState([{ email:"",amount:"" }]);
 
  // Update input data and store in local storage on change
  const handleChange = (event) => {

    const { account,value} = event.target;
    const type = "Debit";
    const now = new Date();
    const details = "Transfer"

    // console.log("account",account);
    // console.log("value",value);
    
    setInputValue((transferAmt)=>([{...transferAmt,account,value,timestamp: now.toLocaleString(),type,details}]));
  };

  const handleSubmit=(event)=> {
    localStorage.setItem("transfer", JSON.stringify(inputValue),[inputValue]);
    alert("Transfer success");
    setInputValue([{email:"",amount:""}]);
    console.log("transfer data values",inputValue);
  };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card-content mt-5">
              <div className="card w-50">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h6 className="p-1">Transfer Money</h6>
                  </li>
                  <form onSubmit={handleSubmit}>
                  <li className="list-group-item">
                    <div className="mb-3 p-2">
                      <h6 className='fw-bold'>Email address</h6>
                      <input
                        type="text"
                        name='email'
                        value={inputValue.email}
                        onChange={handleChange}
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter email"
                        required
                      />
                      <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3 p-2">
                      <h6 className='fw-bold'>Amount</h6>
                      <input
                        type="number"
                        name='amount'
                        value={inputValue.amount}
                        onChange={handleChange}
                        className="form-control"
                        id=""
                        placeholder="Enter amount to withdraw"
                        required
                      />
                      <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="d-grid p-2 mx-auto">
                      <button type="submit" className="btn btn-primary">
                        Transfer
                      </button>
                    </div>
                  </li>
                  </form>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Transfer