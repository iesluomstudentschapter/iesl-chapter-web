var expressJwt = require('express-jwt');
var fs = require('fs');

const RSA_PUBLIC_KEY = fs.readFileSync('./keys/public.key');

const checkIfAuthenticated = expressJwt({
    secret: RSA_PUBLIC_KEY,
    algorithms: ['RS256']
});

module.exports = checkIfAuthenticated;