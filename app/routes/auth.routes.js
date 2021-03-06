module.exports = (app) => {
    const auth = require('../controllers/auth.controller');
    const verifyToken = require('../auth/verifyToken');

    // Login an user
    app.post('/api/login', auth.login);

    // Logout an user
    app.get('/api/logout', verifyToken, auth.logout);

    // MGet owner user
    app.get('/api/me', verifyToken, auth.me);
}