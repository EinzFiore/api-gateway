const express = require('express');
const router = express.Router();

const mediaHendler = require('./handler/media')

router.post('/', mediaHendler.create);
router.get('/', mediaHendler.getAll)
router.delete('/:id', mediaHendler.destroy)

module.exports = router;
