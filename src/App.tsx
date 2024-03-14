import { Outlet } from 'react-router-dom';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <h1>GitHub Finder</h1>
      <Outlet />
    </div>
  );
}

export default App;
