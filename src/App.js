import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";import "./App.css";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { useStateValue } from "./StateProvider";

function App() {

  const [{user}, dispatch] = useStateValue()
  return (
    <div className='app'>
      <Router>
        {!user ? (
            <Login />
          ) : (
          <div>
            <Header />
            <div className='app__body'>
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </div>
        )}
      </Router>
    </div>
  )
}

export default App;
