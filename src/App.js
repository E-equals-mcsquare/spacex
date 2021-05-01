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

let locationParams = window.location.href.split("/");
let launchyear = locationParams[locationParams.length - 3];
let successfullaunch = locationParams[locationParams.length - 2];
let successfulland = locationParams[locationParams.length - 1];

let redirectUrl = ""
if (launchyear == "" || successfullaunch == "" || successfulland == "") {
  redirectUrl = "/0/0/0"
} else {
  redirectUrl =  "/" + launchyear + "/" + successfullaunch + "/" + successfulland
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Redirect to={redirectUrl} />
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
