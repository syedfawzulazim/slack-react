import "./Global.css"
import React from "react";
import { Header, Slidebar, Chat, Login } from "./components";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useStateValue } from './stateProvider/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue()


  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) :
          (
            <>
              <Header />
              <div className="app__body">
                <Slidebar />
                <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h1>Welcome</h1>
                  </Route>
                </Switch>
              </div>
            </>

          )
        }
      </Router>
    </div>
  );
}

export default App;
