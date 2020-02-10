const express = require('express');
const multer = require('multer');
const UpConfig = require('./config/upload');

const SessionControllers = require('./controllers/SessionControllers');
const SpotControllers = require('./controllers/SpotControllers');
const DashControllers = require('./controllers/DashboardControllers');
const BookControllers = require('./controllers/BookingControllers')
const routes = express.Router();
const upload = multer(UpConfig);

routes.post('/sessions',SessionControllers.store)
routes.post('/spot',upload.single('thumbnail'),SpotControllers.store)
routes.get('/spot',SpotControllers.index)
routes.get('/dash',DashControllers.show)
routes.post('/spot/:spot_id/book', BookControllers.store)
module.exports = routes;