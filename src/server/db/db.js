const knex = require('knex')({
    client: 'pg',
    connection: 'postgres://jkrhimvebvhggd:d5b7f7052bde26f44ed0c9d49b5509be9815f4620cb520c816f83c19e79c7677@ec2-54-163-233-103.compute-1.amazonaws.com:5432/d2lhs9s22v1pvk',
});

// const models = require('./models');
module.exports = {
	knex,
	// sequelize: models.sequelize,
}