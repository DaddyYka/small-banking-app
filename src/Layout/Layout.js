import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';


const Layout = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {

    const checkUser = localStorage.getItem("LoggedIn");

    if (checkUser) {
      setUser(JSON.parse(checkUser));
    }
  }, []);

  return (
    <>
      {!user ? 
      <>
        <main>{children}</main>
      </> : <>
              <Header/>
              <main>{children}</main>
             </>
      }
    </>
  )
};

export default Layout