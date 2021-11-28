'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Brands',
			[
			{
				id: 1,
				name: 'Samsung',
				logo_url: 'Samsung.jpg',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2,
				name: 'Xiaomi',
				logo_url: 'Xiaomi.jpg',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 3,
				name: 'Apple',
				logo_url: 'Apple.jpg',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 4,
				name: 'Motorola',
				logo_url: 'Motorola.jpg',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 5,
				name: 'LG',
				logo_url: 'LG.jpg',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 6,
				name: 'Nokia',
				logo_url: 'Nokia.jpg',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 7,
				name: 'Huawei',
				logo_url: 'Huawei.jpg',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 8,
				name: 'Sony',
				logo_url: 'Sony.jpg',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
	}
};
