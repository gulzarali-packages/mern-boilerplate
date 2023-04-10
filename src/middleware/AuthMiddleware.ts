import jwt from 'jsonwebtoken';
import config from '../config/config';

class AuthMiddleware {
    static isLoggedIn(req, res, next) {
      const excludedPaths = ['/login', '/register'];
      if (excludedPaths.includes(req.path)) {
        return next();
      }
  
      // Get the token from the Authorization header
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
          status: false,
          status_code: 401,
          message: 'Unauthorized',
        });
      }
      const token = authHeader.split(' ')[1];
  
      // Verify the token
      jwt.verify(token, config.jwtSecretKey, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            status: false,
            status_code: 401,
            message: 'Unauthorized',
          });
        }
  
        // Set the userId on the request object
        req.userId = decoded.userId;
        next();
      });
    }
  }
  
  export default AuthMiddleware;
  