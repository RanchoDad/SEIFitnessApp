const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensure-logged-in')
const exerciseController = require('../controllers/exercise')

router.get('/',  exerciseController.index);

router.get('/new', exerciseController.new);

router.get('/:id', exerciseController.show);   

router.post('/', ensureLoggedIn, exerciseController.create);

router.delete('/:id', ensureLoggedIn, exerciseController.delete);   

router.get('/:id/edit', ensureLoggedIn, exerciseController.edit);    

router.put('/:id', ensureLoggedIn, exerciseController.update);  

//API Routes
//router.post('/:id/api', exerciseController.createAPi)

module.exports = router;