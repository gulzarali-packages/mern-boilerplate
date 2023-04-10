import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URL,
  jwtSecretKey:process.env.JWT_SECRET_KEY,
  jwtTokenExpiration:'1h'
};

export default config;
