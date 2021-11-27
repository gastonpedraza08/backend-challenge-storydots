const { Product } = require('../../models');

const persist = async product => {
	const result = await Product.create(product);
	return result;
}

module.exports = {
	persist,
}