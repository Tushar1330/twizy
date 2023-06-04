import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Home } from "./Screens/Home.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/'Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
