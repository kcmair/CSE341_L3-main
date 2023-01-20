const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.returnAllContacts);

router.get('/:id', contactsController.findContactById);

router.post('/', contactsController.createContact);

// router.put('/', contactsController.updateContact);

// router.delete('/', contactsController.deleteContact);

module.exports = router;
