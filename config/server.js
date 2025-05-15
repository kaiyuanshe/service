module.exports = ({ env }) => {
  const host = env('HOST', '0.0.0.0'),
    port = env.int('PORT', 1337);

  return {
    host,
    port,
    url: env('URL', `http://${host}:${port}`),
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  };
};
