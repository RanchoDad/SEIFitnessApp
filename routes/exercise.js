const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exercise')

router.get('/', exerciseController.index);

router.get('/new', exerciseController.new);

router.get('/:id', exerciseController.show);   

router.post('/', exerciseController.create);

// router.delete('/:id', exerciseController.delete);    same as show page

// router.get('/:id/edit', exerciseController.edit);    same as show page

// router.put('/:id', exerciseController.update);    same as show page

//API Routes
//router.post('/:id/api', exerciseController.createAPi)

module.exports = router;