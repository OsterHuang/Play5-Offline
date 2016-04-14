var config = {};

config.google = {};
config.facebook = {};
config.mongo = {
	host:'localhost',
	port:27015,
	db:'play5offline'
};

config.port = (process.env.NODE_ENV === 'production') ? 80 : 3000;

module.exports = config;