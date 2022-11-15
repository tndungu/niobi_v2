import React from 'react';
import { useLocation } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import styles from './styles.module.scss';
import { history } from '../../_helpers';
import Login from '../auth/login/Login';
import { Dashboard } from '../dashboard/Dashboard';
import { Register } from '../auth/register/Register';
import { ForgotPassword } from '../auth/login/ForgotPassword';


function App() {
  //let location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;