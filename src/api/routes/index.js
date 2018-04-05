const router = require('express').Router();

router.get('/api/', (req, res, next) => {
    res.send('Hola mundo!!!')
});

module.exports = router;