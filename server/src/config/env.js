export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  mongoUri: process.env.MONGO_URI || process.env.MONGODB_URI || '',
  jwtSecret: process.env.JWT_SECRET || 'bike-renter-development-secret',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
}
