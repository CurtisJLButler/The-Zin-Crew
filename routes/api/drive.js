const express = require('express');
const router = express.Router();
const { Drive } = require('../../models/testDrive');

// POST /api/contact
router.post('/', async (req, res) => {
    try {
      const newTestDrive = await Drive.create(req.body);
      res.status(201).json({ message: 'Test-Drive saved', contact: newTestDrive });
      console.log(newTestDrive.dataValues)
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to save test drive' });
    }
  });
  
  // GET /api/contact
  router.get('/', async (req, res) => {
    Drive.findAll()
          .then(driver => {
              res.send(driver)
              console.log("server sent Test-Driver")
          })
          .catch(err => {
              console.error(err);
              res.status(500).send({ message: "Server error" });
          });
  });

  // Delete a test drive by ID 
  router.delete('/drive/:id', (req, res) => {
    Drive.findByPk(req.params.id)
          .then(testDrive => {
              if (!testDrive) {
                  return res.status(404).send({ message: "Car not found" });
              }
              return testDrive.destroy()
                  .then(() => res.status(200).send({ message: "Car was deleted!", car: testDrive }));
          })
          .catch(err => {
              console.error(err);
              res.status(500).send({ message: "Server error, come back soon" });
          });
  });

  module.exports = router;
