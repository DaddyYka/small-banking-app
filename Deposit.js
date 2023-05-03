import React,{ useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

const Deposit = () => {

  const [inputValue, setInputValue] = useState([{ }]);
  const [deposit, setDeposit] = useState([]);
  
  // Update input data and store in local storage on change
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const type = "Credit";
    const now = new Date();
    const details = "Deposit"
    setDeposit([{...deposit,value,timestamp: now.toLocaleString(),type,details }]);
    console.log("value",value);
    console.log("inputValue",inputValue);
  };

  const handleSubmit=(event)=> {
    event.preventDefault();
    localStorage.setItem("deposit", JSON.stringify(deposit),[deposit])
    setInputValue([]);
  };
 
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card-content mt-5">
              <div className="card w-50">
                <ul className="list-group list-group-flush" >
                  <li className="list-group-item">
                    <h6 className="p-2">Deposit Money</h6>
                  </li>
                  <form onSubmit={handleSubmit}>
                  <li className="list-group-item">
                    <div className="mb-3 p-2">
                      <h6 className='fw-bold'>Amount</h6>
                      <input
                        type="number"
                        value={inputValue}
                        onChange={handleChange}
                        className="form-control"
                        id=""
                        placeholder="Enter amount"
                        required
                      />
                      <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="d-grid p-2 mx-auto">
                      <button type="submit" className="btn btn-primary">
                        Deposit
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

export default Deposit