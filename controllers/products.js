const express = require('express');
const router = express.Router();
const handler = require('../handlers/products');

router.get('/', async (req, res, next) => {
	try {
		const result = await handler.getProducts();
		res.status(200).json({
			products: result
		});
	} catch (e) {
		next(e);
	}
});

router.post('/', async (req, res, next) => {
	const product = req.body;
	try {
		const result = await handler.createProduct(product);
		res.status(200).json({
			message: 'Product create successfully',
			product: result
		});
	} catch (e) {
		next(e);
	}
});

module.exports = router;