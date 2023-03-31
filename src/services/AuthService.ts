import User from '../models/User';
import passport from 'passport';

export class AuthService {
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

    async register(request) {
        const newUser = new User({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        });

        return newUser;
    }
}