import React, { useEffect, useState } from 'react';
import Layout from "../Layout/Layout";
import { useNavigate } from 'react-router-dom';

const Statement = () => {
  
  const navigate = useNavigate(); 
  const [bankTransactions, setBankTransactions] = useState([]);

    useEffect(()=>{ 
      const lastNotFound = JSON.parse(localStorage.getItem("transfer"));
      // console.log(lastNotFound);
      if(lastNotFound===null){
        alert("No Data Found, Please do Deposit & Transfer transactions")
        navigate('/deposit');
      }else{
        const transfer = JSON.parse(localStorage.getItem("transfer"));
        const deposit = JSON.parse(localStorage.getItem("deposit"));
        const bankTransactions = [...transfer,...deposit];
        localStorage.setItem("bankTransactions", JSON.stringify(bankTransactions),[bankTransactions]);
          setBankTransactions(bankTransactions);
          // console.log("bankTransactions",bankTransactions);
      }
    },[]);

    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card-content mt-5">
                <div className="card w-50">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h6 className="p-1">Statement of Account</h6>
                    </li>
                    <li className="list-group-item">
                      <div className="mb-3 p-2">
                        <table class="table">
                          <thead>
                            <tr className="t-head ">
                              <th scope="col">No</th>
                              <th scope="col">DATE&TIME</th>
                              <th scope="col">AMOUNT</th>
                              <th scope="col">TYPE</th>
                              <th scope="col">DETAILS</th>
                            </tr>
                          </thead>
                          <tbody>
                          {bankTransactions.map((transData, index) => (
                            <tr className="t-row" >
                                <tr>
                                  <th scope="row" key={index}>{index+1}</th>
                                </tr>
                                <>
                                  <td>{transData.timestamp}</td>
                                  <td>{transData.value}</td>
                                  <td>{transData.type}</td>
                                  <td>{transData.details}</td>
                                </>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination mb-2">
                          <li className="page-item">
                            <a
                              className="page-link"
                
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link"  aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  };

export default Statement