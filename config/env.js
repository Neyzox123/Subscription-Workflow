const dotenv = require('dotenv');
const path = require('path');

const environment = process.env.NODE_ENV || 'development';

const envFile = environment === 'production'
    ? '.env.production'
    : '.env.development';

dotenv.config({
    path: path.resolve(process.cwd(), envFile)
});

module.exports = {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME
};