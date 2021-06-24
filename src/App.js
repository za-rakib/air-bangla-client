import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import AddDestination from './components/Dashbord/AddDestination/AddDestination';

function App() {
  return (
    <Router>
    
        <Switch>
          <Route exact path="/">
         <Home/>
          </Route>
          <Route path="/home">
          <Home/>
          </Route>
         
          <Route path="/dashboard">
            {/* <Dashboard /> */}
          </Route>
          <Route path="/addDestination">
           <AddDestination/>
          </Route>
        </Switch>
     
    </Router>
  );
}

export default App;
