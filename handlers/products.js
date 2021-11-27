const repository = require('../services/repositories/products');

const createProduct = async product => {
	const result = await repository.persist(product);
	return result;
}

module.exports = {
	createProduct,
}