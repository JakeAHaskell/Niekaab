import React, { Component } from 'react';
import Home from './components/Home';
import Form from './components/Form';
import Error from './components/Error';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() { 
    const App = () => (
          <div>
            <NavBar/>
                <Switch> 
                  <Route exact path="/">
                        <Home/>
                  </Route>
                  <Route path="/Contact">
                        <Form/>
                  </Route>
                  <Route>
                        <Error/>
                  </Route>
                </Switch>

          </div>

    )
    
    return (  
      <Switch>
        <App/>
      </Switch>
    );
  }
}
 
export default App;
