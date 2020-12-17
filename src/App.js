import './App.css';
import "fullpage.js/dist/fullpage.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {useContext} from "react"

import Header from "./components/header"
import Home from "./pages/home"
import About from "./pages/about"
import Refs from "./global/Refs"


const App = () => {

  const refs = useContext(Refs)
  return (
    <Router >
      <div className="App">
        <Header ref={refs.header}/>
        <Switch>
          <Route path="/aboutPage" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;

