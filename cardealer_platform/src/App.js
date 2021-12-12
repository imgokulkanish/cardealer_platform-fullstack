import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css"
import Navbar from "./components/navbar.component"
import CarsList from "./components/cars-list.component";
import EditCar from "./components/edit-car.component";
import CreateCar from "./components/create-car.component";
import CreateDealer from "./components/create-dealer.component";

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
    <br/>
    <Route path="/" exact component={CarsList} />
    <Route path="/edit/:id" component={EditCar} />
    <Route path="/create" component={CreateCar} />
    <Route path="/user" component={CreateDealer} />
    </div>
  </Router>
  );
}

export default App;
