import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/HomeComponent';
import NavigationComponent from './components/NavigationComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';

function App() {
  return (
    <Router>
      <div className="App">
          <div className="auth-wrapper">
              <div className="auth-inner">
                  <Switch>
                      <Route path='/' exact render={props =>
                        <div>
                          <NavigationComponent {...props}/>
                          <HomeComponent {...props}/>
                        </div>
                      } /> 
                      <Route path='/after-login/:userName' render={props =>
                        <div>
                          <NavigationComponent {...props}/>
                          <HomeComponent {...props}/>
                        </div>
                      } />
                      <Route path="/login" component={LoginComponent}/>
                      <Route path="/register" component={RegisterComponent}/>
                  </Switch>
              </div>
          </div>
      </div>
    </Router>
  );
}

export default App;
