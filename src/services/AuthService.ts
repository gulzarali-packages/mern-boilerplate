import User from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class AuthService {
  async login(request) {
    try {
      const { email, password } = request;

      // Find user by email
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('Invalid email or password');
      }

      // Compare password hashes
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        throw new Error('Invalid email or password');
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, 'your_jwt_secret_key', { expiresIn: '1h' });

      return token;
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