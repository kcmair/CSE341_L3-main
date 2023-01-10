const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.returnAllContacts);

router.get('/:id', contactsController.findContactById);

module.exports = router;
