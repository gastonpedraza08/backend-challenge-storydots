const express = require('express');
const router = express.Router();
const handler = require('../handlers/products');

router.get('/', (req, res) => {
	res.status(200).json({
		message: 'get products'
	});
});

router.post('/', async (req, res, next) => {
	const product = req.body.product;
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