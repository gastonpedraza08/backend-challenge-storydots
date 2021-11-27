const repository = require('../services/repositories/products');

const createProduct = async product => {
	const result = await repository.persist(product);
	return result;
}

const getProducts = async () => {
	const result = await repository.getAll();
	return result;
}

const getProductById = async id => {
	const result = await repository.getById(id);
	return result;
}

const updateProduct = async (id, newProduct) => {
	const result = await repository.update(id, newProduct);
	return result;
}



module.exports = {
	createProduct,
	getProducts,
	getProductById,
	updateProduct,
}