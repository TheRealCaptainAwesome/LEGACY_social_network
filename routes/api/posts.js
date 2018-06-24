const express = require('express');
const router = express.Router();

router.get('/placeholder', (req, res) => res.json({ msg: 'postsroutes works' }));

module.exports = router;