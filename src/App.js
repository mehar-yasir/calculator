import Landing from "./components/Landing/Landing";
import History from "./components/History/History";
import Calculator from "./containers/Calculator/Calculator";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/history" component={History}></Route>
          <Route exact path="/calculator" component={Calculator}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
