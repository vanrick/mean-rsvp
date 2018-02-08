// server/config.js
module.exports = {
    AUTH0_DOMAIN: 'https://rsvp-mean-app.auth0.com/api/v2/', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
    MONGO_URI: process.env.MONGO_URI || 'mongodb://mean:mean@ds125068.mlab.com:25068/mean',
    NAMESPACE: 'http://myapp.com/roles'
};