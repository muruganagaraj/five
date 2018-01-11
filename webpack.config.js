
module.exports = process.env.NODE_ENV === 'production'
? require('./config/webpack.production.config.js')
: require('./config/webpack.dev.config.js')