import React,{ useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

const Deposit = () => {

  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);
  
  // Update input data and store in local storage on change
  const handleChange = (event) => {
    const deposit = event.target.value;
    const type = "Credit";
    const now = new Date();
    setInputValue(deposit);
    setHistory([...history, { deposit, timestamp: now.toLocaleString(),type }]);

  };

  const handleSubmit=()=> {
    localStorage.setItem("history", JSON.stringify(history),[history])
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
      {/* <div>
      <p>Input: {history}</p>
      </div> */}
    </Layout>
  );
}

export default Deposit