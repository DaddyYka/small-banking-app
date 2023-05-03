import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import "../Styles/PageStyles.css";

const Home = () => {

  const storedUser = localStorage.getItem("LoggedIn");
  const user = JSON.parse(storedUser);
  const userId = user.email;
  const userName = user.name;

  useEffect(() => {
    const balance = "20,000.00";
    localStorage.setItem("bankBalance", JSON.stringify(balance),[]);
  }, []);
  
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card-content mt-5">
            <div className="card w-50">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h5 className='p-2'>Welcome {userName}</h5>
                </li>
                <li className="list-group-item d-flex card-lines p-2 mt-2"> YOUR ID <h6 className='mx-5 card-li fw-bold'>{userId}</h6></li>
                <li className="list-group-item d-flex card-lines p-2 mt-2">YOUR BALANCE <h6 className='mx-3 card-dynamic fw-bold'>20,000.00</h6></li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home