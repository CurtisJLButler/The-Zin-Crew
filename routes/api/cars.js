var express = require('express');
var router = express.Router();
var Cars = require('../../models/cars');

// GET all cars --> /api/cars
router.get('/', (req, res) => {
    Cars.Car.findAll()
        .then(cars => res.send(cars))
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Server error" });
        });
});

// GET one car by ID --> /api/cars/:id
router.get('/:id', (req, res) => {
    Cars.Car.findByPk(req.params.id)
        .then(car => {
            if (!car) {
                return res.status(404).send({ message: "Car not found" });
            }
            res.send(car);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Server error, come back soon" });
        });
});

// Create a new car --> POST /api/cars
router.post('/', (req, res) => {
    Cars.Car.create(req.body)
        .then(newCar => res.status(201).send(newCar))
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Server error" });
        });
});

// Update a car by ID --> PUT /api/cars/:id
router.put('/:id', (req, res) => {
    Cars.Car.findByPk(req.params.id)
        .then(car => {
            if (!car) {
                return res.status(404).send({ message: "Car not found" });
            }
            return car.update(req.body)
                .then(updatedCar => res.status(200).send(updatedCar));
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Server error, please try again later" });
        });
});

// Delete a car by ID --> DELETE /api/cars/:id
router.delete('/:id', (req, res) => {
    Cars.Car.findByPk(req.params.id)
        .then(car => {
            if (!car) {
                return res.status(404).send({ message: "Car not found" });
            }
            return car.destroy()
                .then(() => res.status(200).send({ message: "Car was deleted!", car }));
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Server error, come back soon" });
        });
});

module.exports = router;
