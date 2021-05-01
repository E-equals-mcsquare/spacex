import "./App.css";
import {
  Switch,
  Route,
  HashRouter as Router,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Redirect to="/0/0/0" />
            <Header />
            <Dashboard />
            <Footer />
          </Route>
          <Route default path="/:launchyear/:successfullaunch/:successfulland">
            <Header />
            <Dashboard />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
