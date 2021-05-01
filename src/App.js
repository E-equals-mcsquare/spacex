import "./App.css";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:launchyear/:successfullaunch/:successfulland">
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
