const express = require('express');
const router = express.Router();
const { Contact } = require('../../models/contact-form');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json({ message: 'Contact saved', contact: newContact });
    console.log(newContact.dataValues)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// GET /api/contact
router.get('/', async (req, res) => {
    Contact.findAll()
        .then(contacts => {
            res.send(contacts)
            console.log("server sent contact")
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Server error" });
        });
});

module.exports = router;
