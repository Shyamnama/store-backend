const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
  return res.json({message: 'Service reachable'});
});

module.exports = router;