const repository = require('../services/repositories/products');

const createProduct = async product => {
	const result = await repository.persist(product);
	return result;
}

const getProducts = async params => {
	const result = await repository.getAll(params);
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

const deleteProduct = async id => {
	const result = await repository.destroy(id);
	return result;
}



module.exports = {
	createProduct,
	getProducts,
	getProductById,
	updateProduct,
	deleteProduct,
}