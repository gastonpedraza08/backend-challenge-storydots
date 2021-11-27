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

router.get('/:id', async (req, res, next) => {
	try {
		const result = await handler.getProductById(req.params.id);
		res.status(200).json({
			product: result
		});
	} catch (e) {
		next(e);
	}
});

router.put('/:id', async (req, res, next) => {
	const newProduct = req.body;
	try {
		const result = await handler.updateProduct(req.params.id, newProduct);
		let message = 'Product updated successfully';
		if (result[0]===0) {
			message = 'Can not update product';
		}
		res.status(200).json({
			message
		});
	} catch (e) {
		next(e);
	}
});

module.exports = router;