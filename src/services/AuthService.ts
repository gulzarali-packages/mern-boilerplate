import { User } from '../models/User';

export class AuthService {
    async login(request) {
        const user = await User.findOne({ email: request.email, password: request.password });
        if (user) {
            return user;
        }
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