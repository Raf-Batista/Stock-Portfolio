import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div >
      <Home /> 
      <Navbar />
      <Switch>

        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
