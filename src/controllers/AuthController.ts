import AuthService from '../services/AuthService';
import { LoginRequest } from '../requests/user/LoginRequest';
import { RegisterRequest } from '../requests/user/RegisterRequest';
import { validate, ValidationError } from 'class-validator';

class AuthController {
    async register(req, res) {
        try {
            const registerRequest = new RegisterRequest(req);
            const errors = await validate(registerRequest);

            if (errors.length > 0) {
                const errorResponse: { [key: string]: string } = {};
                errors.forEach((error: ValidationError) => {
                    Object.keys(error.constraints).forEach(key => {
                        errorResponse[error.property] = error.constraints[key];
                    });
                });
                return res.status(422).json({ errors: errorResponse });
            }
            const result = await AuthService.register(req.body);
            return res.status(200).json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: new Error(error) });
        }
    }

    async login(request, response) {
        try {
            const loginRequest = new LoginRequest(request.body.email, request.body.password);
            const errors = await validate(loginRequest);

            if (errors.length > 0) {
                return response.status(422).json({ errors });
            }
            return AuthService.login(request.body.email, request.body.password);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default new AuthController();