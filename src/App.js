import './App.css';
import "fullpage.js/dist/fullpage.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




import Header from "./components/header"
import Home from "./pages/home"
import About from "./pages/about"

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
