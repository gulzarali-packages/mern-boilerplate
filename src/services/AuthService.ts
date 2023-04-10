import User from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../config/config';
import ObjectManipulator from '../lib/helpers/ObjectDestructurer';

class AuthService {
  async login(request) {
    try {
      const { email, password } = request;

      // Find user by email
      const user = await User.findOne({ email });

      if (!user) {
        return false;
      }

      // Compare password hashes
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return false;
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, config.jwtSecretKey, { expiresIn: config.jwtTokenExpiration });
      
      return {
        ...ObjectManipulator.distruct(user),
        token
      };
    } catch (err) {
      console.error(err);
      throw new Error('Server error');
    }
  }

  async register(request) {
      const { userName, email, password } = request;

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        userName,
        email,
        password: hashedPassword
      });

      // Save user to the database
      return newUser.save();
    
  }
}

export default new AuthService();