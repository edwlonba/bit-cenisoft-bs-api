//const Client = require('./model')
const { Client } = require("./model")

const createClient = (req, res) => {
  const newClient = new Client(req.body)
  newClient.save((error, clientSaved) => {
    if (error) {
      console.error('Error saving client ', error)
      res.status(500).send(error)
    } else {
      res.send(clientSaved)
    }
  })
}

const selectClient = async(req, res) => {
  const client = await Client.findById(req.params.id)
  res.send(client)
}

const updateClient = async(req, res) => {
  const client = await Client.updateOne({_id:req.params.id}, {$set:req.body})
  res.send('Cliente update successfully!')
}

const deleteClient = async(req, res) => {
  const client = await Client.deleteOne({_id:req.params.id})
  if (client.deletedCount === 1) {
    res.send('Cliente deleted successfully!')
  } else {
    res.send("No documents matched the query. Deleted 0 documents.");
  }
}

module.exports = { createClient, selectClient, updateClient, deleteClient }
