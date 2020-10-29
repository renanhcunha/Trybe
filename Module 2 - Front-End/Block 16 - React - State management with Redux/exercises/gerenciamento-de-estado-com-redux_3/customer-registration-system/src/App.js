import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Login, CustomerRegister, RegisteredCustomers } from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/registered-customers' component={RegisteredCustomers}/>
            <Route path='/customer-register' component={CustomerRegister}/>
            <Route path='/' component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
