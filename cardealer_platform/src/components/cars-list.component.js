import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Car = props => (
  <tr>
    <td>{props.car.username}</td>
    <td>{props.car.carregisno}</td>
    <td>{props.car.carcolor}</td>
    <td>{props.car.carmodel}</td>
    <td>{props.car.dealerpincode}</td>
    <td>
      <Link to={"/edit/"+props.car._id}>edit</Link> | <a href="#" onClick={() => { props.deleteCar(props.car._id) }}>delete</a>
    </td>
  </tr>
)

export default class CarsList extends Component {
    constructor(props) {
      super(props);
  
      this.deleteCar = this.deleteCar.bind(this)
  
      this.state = {cars: []};
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/cars/')
        .then(response => {
          this.setState({ cars: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    deleteCar(id) {
      axios.delete('http://localhost:5000/cars/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        cars: this.state.cars.filter(el => el._id !== id)
      })
    }
  
    carList() {
      return this.state.cars.map(currentcar => {
        return <Car car={currentcar} deletecar={this.deleteCar} key={currentcar._id}/>;
      })
    }

  render() {
    return (
      <div>
        <h3>Car Details</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Dealername</th>
              <th>CarRegistrationNumber</th>
              <th>CarColour</th>
              <th>CarModel</th>
              <th>DealerPincode</th>
            </tr>
          </thead>
          <tbody>
            { this.carList() }
          </tbody>
        </table>
      </div>
    )
  }
}