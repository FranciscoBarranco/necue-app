const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('products-db', ['product']);

router.get('/products', (req, res, next) => {
    db.products.find((err, products) => {
        if (err) return next(err);
        res.json(products);
    });
});

router.get('/products/:id', (req, res, next) => {
    db.products.findOne({_id: mongojs.ObjectId(req.params._id)}, (err, product) => {
        if (err) return next(err);
        res.json(product);
    });
});

router.post('/products', (req, res, next) => {
    const product = req.body;

    if(!product.store || !product.producto){
        res.status(400).json({
            error: '¡Información incorrecta!'
        })
    }else{
        db.products.save(product, (err, product) => {
            if(err) return next(err);
            res.json(products);
        })
    }
});

router.delete('/products/:id', (req, res, next) => {
    db.products.remove({_id:  mongojs.ObjectId(req.params._id)}, (err, result) => {
        if(err) return (err);
        res.json(result);
    })
});

router.put('/products/:id', (req, res, next) => {
    const product = req.body;
    const updateProduct = {};

    if(product.store){
        updateProduct.store = product.store;
    }

    if(product.producto) {
        updateProduct.producto = product.producto;
    }

    if(!updateProduct){
        res.status(400).json({
            error: '¡Información incorrecta!'
        })
    }else{
        db.products.update({_id: mongojs.ObjectId(req.params.id)}, (err, product) => {
            if(err) return next(err);
            res.json(product);
        })
    }
})
module.exports = router;