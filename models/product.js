'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Brand, {
				as: 'brand',
				foreingKey: 'brandId',
			});
    }
  };
  Product.init({
		name: DataTypes.STRING,
		description: DataTypes.TEXT('long'),
		image_url: DataTypes.STRING,
		price: DataTypes.DECIMAL,
		brandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: true,
		paranoid: true,
  });
  return Product;
};