const { Product } = require('../../models');

const persist = async product => {
	const result = await Product.create(product);
	return result;
}

const getAll = async () => {
	const result = await Product.findAll();
	return result;
}

module.exports = {
	persist,
	getAll,
}