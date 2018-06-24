const express = require('express');
const router = express.Router();

router.get('/placeholder', (req, res) => res.json({ msg: 'profileroutes works' }));

module.exports = router;