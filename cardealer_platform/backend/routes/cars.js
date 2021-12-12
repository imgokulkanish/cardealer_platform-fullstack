const router = require('express').Router();
let Car = require('../models/cars.model');

router.route('/').get((req, res) => {
    Car.find()
    .then(cars => res.json(cars))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const carregisno = Number(req.body.carregisno);
  const carcolor = req.body.carcolor;
  const carmodel = req.body.carmodel;
  const dealerpincode = Number(req.body.dealerpincode);

  const newCar = new Car({
    username,
    carregisno,
    carcolor,
    carmodel,
    dealerpincode,
  });

  newCar.save()
  .then(() => res.json('Car added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Car.findById(req.params.id)
    .then(car => res.json(car))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Car.findByIdAndDelete(req.params.id)
    .then(() => res.json('Car deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
  Car.findById(req.params.id)
    .then(car => {
      car.username = req.body.username;
      car.carregisno = Number(req.body.carregisno);
      car.carcolor = req.body.carcolor;
      car.carmodel = req.body.carmodel;
      car.dealerpincode = Number(req.body.dealerpincode);

      car.save()
        .then(() => res.json('Car updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;