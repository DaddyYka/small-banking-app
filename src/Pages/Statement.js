import React from 'react';
import Layout from "../Layout/Layout";

const Statement = () => {
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
                            <th scope="col">#</th>
                            <th scope="col">DATE&TIME</th>
                            <th scope="col">AMOUNT</th>
                            <th scope="col">TYPE</th>
                            <th scope="col">DETAILS</th>
                            <th scope="col">BALANCE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className='t-row'>
                            <th scope="row">1</th>
                            <td>
                              <p>30-04-2023<br />12.30 pm</p>
                            </td>
                            <td>2000.00</td>
                            <td>Credit</td>
                            <td>Deposit</td>
                            <td>2000.00</td>
                          </tr>
                          <tr className='t-row'>
                            <th scope="row">2</th>
                            <td>
                              <p>30-04-2023<br />11.30 pm</p>
                            </td>
                            <td>1500.00</td>
                            <td>Credit</td>
                            <td>Deposit</td>
                            <td>3500.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination mb-2">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">«</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
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
}

export default Statement