const express = require('express')
const router = express.Router()
const { createClient, selectClient, updateClient, deleteClient } = require('./actions')

// GET by ID
router.get('/:id', selectClient) 

// POST Create a Client
router.post('/', createClient)

// PUT Update a Client's info
router.put('/:id', updateClient)

// DELETE by ID
router.delete('/:id', deleteClient)

module.exports = router
