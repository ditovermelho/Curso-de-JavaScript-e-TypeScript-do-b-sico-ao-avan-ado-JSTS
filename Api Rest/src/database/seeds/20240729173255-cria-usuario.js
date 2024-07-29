'use strict';
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
      nome: 'Luis',
      email: 'luis1@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      nome: 'Luis 2',
      email: 'luis2@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      nome: 'Luis 3',
      email: 'luis3@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    }
  ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
