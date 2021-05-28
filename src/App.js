import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
 
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
