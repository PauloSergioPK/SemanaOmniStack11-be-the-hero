const express = require('express')

const OngController = require('./controllers/OngController')
const IncendentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router()

routes.get('/ongs',OngController.index)
routes.get('/incidents',IncendentsController.index)
routes.get('/profile',ProfileController.index)
routes.post('/ongs', OngController.create)
routes.post('/incidents',IncendentsController.create)
routes.post('/session',SessionController.create)
routes.delete('/incidents/:id',IncendentsController.delete)
module.exports = routes
