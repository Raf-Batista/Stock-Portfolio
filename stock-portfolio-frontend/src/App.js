import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Portfolio from './components/Portfolio';
import Transactions from './components/Transactions';

function App() {
  return (
    <div >
      <Home /> 
      <Navbar />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/transactions' component={Transactions} />
      </Switch>
    </div>
  );
}

export default App;
