import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URL,
  jwtSecretKey:process.env.JWT_SECRET_KEY,
  jwtTokenExpiration:'6h',
  googleAuth:{
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  database:{
    cosmo:{
      endPoint:'test',
      key:'thfr',
      databaseId:'1',
      containerId:'23'
    }
  }
};

export default config;
