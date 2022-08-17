module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fbe8fb2f9be4e27acaa4182a12169178'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
