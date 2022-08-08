import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
}

function NavBar() {
  return (

  <div>
    <NavLink to="/" exact style={ linkStyles } activeStyle={ { background: 'darkblue' } }>
      Home
    </NavLink>
    <NavLink to="/about" exact style={ linkStyles } activeStyle={ { background: 'darkblue' } }>
      About
    </NavLink>
    <NavLink to="/login" exact style={ linkStyles } activeStyle={ { background: 'darkblue' } }>
      Login
    </NavLink>
  </div>
  )
}


function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function App() {
return (
<div>
  <NavBar/>
  <Switch>
    <Route path="/Login">
        <Login/>
      </Route>
      <Route path='/About'>
        <About/>
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
</div>
  )
}

function About() {
  return (
    <div>
      <h1>This is my About component</h1>
    </div>
  )
}

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>

          <input type='text' name="username" placeholder="UserName"/>


          <input type='text' name='password' placeholder="Password"/>

        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />,
  </BrowserRouter>,
    document.getElementById("root"));
