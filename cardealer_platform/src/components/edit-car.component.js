import React, { Component } from 'react';
import axios from 'axios';


export default class EditCar extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeRegister = this.onChangeRegister.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangePin = this.onChangePin.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      carregisno: '',
      carcolor: '',
      carmodel: [],
      carcolor: '',
      dealerpincode:'',
      users: []
    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/cars/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          carregisno: response.data.carregisno,
          carcolor: response.data.carcolor,
          carmodel: response.data.carmodel,
          dealerpincode: response.data.dealerpincode
        })   
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeRegister(e) {
    this.setState({
      carregisno: e.target.value
    })
  }

  onChangeColor(e) {
    this.setState({
      carcolor: e.target.value
    })
  }

  onChangeModel(e) {
    this.setState({
      carmodel: e.target.value
    })
  }

  onChangePin(e) {
    this.setState({
      dealerpincode: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const car = {
      username: this.state.username,
      carregisno: this.state.carregisno,
      carcolor: this.state.carcolor,
      carmodel: this.state.carmodel,
      dealerpincode: this.state.dealerpincode
    }

    console.log(car);

    axios.post('http://localhost:5000/cars/update/' + this.props.match.params.id, car)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Car</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Dealer name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Car Register Number: </label>
          <input  type="number"
              required
              className="form-control"
              value={this.state.carregisno}
              onChange={this.onChangeRegister}
              />
        </div>
        <div className="form-group">
          <label>Car Colour </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.carcolor}
              onChange={this.onChangeColor}
              />
        </div>
        <div className="form-group">
          <label>Car Model </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.carmodel}
              onChange={this.onChangeModel}
              />
        </div>
        <div className="form-group">
          <label>Dealer Pincode </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.dealerpincode}
              onChange={this.onChangePin}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Car" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}