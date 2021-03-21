import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import FormStep1 from './components/FormStep1/FormStep1';
import FormStep2 from './components/FormStep2/FormStep2';
import FormStep3 from './components/FormStep3/FormStep3';
import CV from './components/CV/CV';

import styles from './App.module.scss';

function App() {
  const routes = (
    <Switch>
      <Route path='/step1'>
        <FormStep1 />
      </Route>
      <Route path='/step2'>
        <FormStep2 />
      </Route>
      <Route path='/step3'>
        <FormStep3 />
      </Route>
      <Route path='/cv'>
        <CV />
      </Route>
      <Redirect to={'/step1'} />
    </Switch>
  )

  return (
    <div className={styles.App}>
      {routes}
    </div>
  );
}

export default App;
