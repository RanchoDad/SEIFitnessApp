const express = require('express');
const router = express.Router();
const repsetsCtrl = require('../controllers/repsets');
// const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /exercises/:id/repsets (create repset for a exercise)
router.post('/exercises/:id/repsets', repsetsCtrl.create);
router.delete('/repsets/:id', repsetsCtrl.deleterepset);


module.exports = router;