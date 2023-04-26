const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exercise')
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('index');
  };
router.get('/',  exerciseController.index);

router.get('/new', ensureAuthenticated, exerciseController.new);

router.get('/:id', ensureAuthenticated, exerciseController.show);   

router.post('/', ensureAuthenticated, exerciseController.create);

// router.delete('/:id', ensureAuthenticated,  exerciseController.delete);   

// router.get('/:id/edit', ensureAuthenticated, exerciseController.edit);    

// router.put('/:id', ensureAuthenticated, exerciseController.update);  

//API Routes
//router.post('/:id/api', exerciseController.createAPi)

module.exports = router;