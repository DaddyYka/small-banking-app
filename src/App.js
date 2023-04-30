import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Deposit from './Pages/Deposit';
import Withdraw from './Pages/Withdraw';
import Transfer from './Pages/Transfer';
import Statement from './Pages/Statement';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/deposit' element={<Deposit/>} />
        <Route path='/withdraw' element={<Withdraw/>} />
        <Route path='/transfer' element={<Transfer/>} />
        <Route path='/statement' element={<Statement/>} />
      </Routes>
    </>
  );
}

export default App;
