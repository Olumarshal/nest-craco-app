export default () => ({
  port: parseInt(process.env.PORT, 10),
  dbHost: process.env.DB_HOST,
  dbPort: parseInt(process.env.DB_PORT, 10),
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASS,
  dbName: process.env.DB_NAME,
  secret: process.env.SECRET,
  jwt_ttl: process.env.JWT_EXPIRATION_TIME,
});
