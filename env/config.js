

var env = process.env;


module.exports = {
    isDev: env.isDev === 'true',
    serverPort: env.OPENSHIFT_NODEJS_PORT || 8080,
    serverIp: env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    requireAuth: env.requireAuth === 'true',
    mongodbUrl: env.mongodbUrl,
    secretKey: env.secretKey
};