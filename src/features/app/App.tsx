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
import NavPage from './Layout/NavPage';
import { Entity } from './Layout/entity/Entity';
import { Compliance } from './Layout/compliance/Compliance';
import { VerifyEmail } from '../auth/verify-email/VerifyEmail';
import { Payables } from './Layout/Payables/Payables';
import { Receivables } from './Layout/Receivables/Receivables';
import { Settings } from './Layout/Settings/Settings';
import { ApprovalPolicies } from './Layout/Settings/ApprovalPolicies';
import { Counterparts } from './Layout/Counterparts/Counterparts';

function App() {
  //let location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<NavPage />}>
            <Route path="entity" element={<Entity />} />
            <Route path="compliance" element={<Compliance />} />
            <Route path="verify-email" element={<VerifyEmail />} />
            <Route path="payables" element={<Payables />} />
            <Route path="receivables" element={<Receivables />} />
            <Route path="counterparts" element={<Counterparts />} />
            <Route path="settings" element={<Settings />}>
              <Route path="approval-policies" element={<ApprovalPolicies />} />
            </Route>
            <Route path="payables" element={<Payables/>} />
          </Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;