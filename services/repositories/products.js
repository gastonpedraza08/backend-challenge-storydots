const { Product } = require('../../models');

const persist = async product => {
	const result = await Product.create(product);
	return result;
}

const getAll = async params => {
	const result = await Product.findAndCountAll({
		limit: params.limit,
		offset: params.offset,
		order: [[params.orderBy, params.order]],
	});
	return result;
}

const getById = async id => {
	const result = await Product.findByPk(id);
	return result;
}

const update = async (id, newProduct) => {
	const result = await Product.update(newProduct, {
		where: {
			id
		}		
	});
	return result;
}

const destroy = async id => {
	const result = await Product.destroy({
		where: {
			id
		}
	});
	return result;
}

module.exports = {
	persist,
	getAll,
	getById,
	update,
	destroy,
}