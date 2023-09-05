import './App.css';
import Register from './Register';
import Loginform from './Loginform';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OnlineBillPaymentForm from './OnlineBillPaymentForm';

function App() {
  return (
   
    <Router>
      <div>
        <Routes>
    
          <Route path='/' exact Component={Register}/>
          <Route path='/login' Component={Loginform}/>
          <Route path='/onlinebill' Component={OnlineBillPaymentForm}/>
         
          </Routes>
      </div>
    </Router>
    
   
  );
}

export default App;