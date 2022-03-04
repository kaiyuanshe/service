const { parse } = require("pg-connection-string");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: parse(env("DATABASE_URL")),
  },
});
