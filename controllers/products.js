const express = require('express');
const router = express.Router();
const handler = require('../handlers/products');
const ControllerError = require('../helpers/ControllerError');

router.get('/', async (req, res, next) => {	
	const params = {
		limit: req.query.limit ? parseInt(req.query.limit) : 12,
		order: req.query.order ? req.query.order : 'DESC',
		orderBy: req.query.orderBy ? req.query.orderBy : 'id',
		offset: req.query.offset ? parseInt(req.query.offset) : 0
	};

	if (req.query.page) {
		let offset = params.limit * (Number(req.query.page) - 1);
		params.offset = offset;
	}

	try {
		const result = await handler.getProducts(params);
		res.status(200).json({
			products: result.rows,
			count: result.count
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

		if (result[0]===0) {
			throw new ControllerError('Can not update product', 400);
		}

		res.status(200).json({
			message: 'Product updated successfully'
		});
	} catch (e) {
		next(e);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const result = await handler.deleteProduct(req.params.id);

		if (result===0) {
			throw new ControllerError('Can not delete product', 400);
		}

		res.status(200).json({
			message: 'Product deleted successfully'
		});
	} catch (e) {
		next(e);
	}
});

module.exports = router;