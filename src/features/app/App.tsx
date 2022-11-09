import React from 'react';
import { useLocation } from 'react-router-dom';


import styles from './styles.module.scss';

function App() {
  //let location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.app}>
      {/* <Routes /> */}
      <h1>NIOBI App</h1>
    </div>
  );
}

export default App;