import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
      
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/profile/:usernamr">
          <Profile/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
