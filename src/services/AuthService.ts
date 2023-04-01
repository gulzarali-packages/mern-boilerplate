import User from '../models/User';
import passport from 'passport';

class AuthService {
    async login(email,password) {
        return new Promise((resolve, reject) => {
            passport.authenticate('local', (err, user, info) => {
                if (err) {
                    reject(err);
                }
                if (!user) {
                    reject('Incorrect email or password');
                }
                resolve(user);
            })({ body: { email, password } });
        });
    }

    async register(data: any) {
        const newUser = new User({
            userName: data.userName,
            email: data.email,
            password: data.password
        });

        return newUser.save();
    }
}

export default new AuthService();