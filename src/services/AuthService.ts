import User from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../config/config';
import ObjectManipulator from '../lib/helpers/ObjectDestructurer';

class AuthService {
  async login(req) {
    try {
      const { email, password } = req;

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

  async register(req) {
      const { userName, email, password } = req;

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

  async googleAuth(req){
    const { id, displayName, emails } = req.user;

    // Check if user already exists
    let user = await User.findOne({ providerId: id,email:emails[0].value });

    if (!user) {
      // User does not exist, create new user
      user = new User({
        provider: 'google',
        providerId: id,
        userName: displayName,
        email: emails[0].value
      });
      await user.save();
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, config.jwtSecretKey, { expiresIn: config.jwtTokenExpiration });

    return {
      id : user._id,
      userName : user.userName,
      email : user.email,
      token: token
    };
  }
}

export default new AuthService();