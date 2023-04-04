import AuthService from '../services/AuthService';
import { LoginRequest } from '../requests/user/LoginRequest';
import { RegisterRequest } from '../requests/user/RegisterRequest';
import { validate, ValidationError } from 'class-validator';
import LoginResource from '../resources/LoginResource'

class AuthController {
    /**
     * Register new user
     * @param req 
     * @param res 
     * @returns errors|user
     */
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
            return res.status(500).json(new Error(error));
        }
    }
    /**
     * Login method
     * @param req 
     * @param res 
     * @returns authentication object
     */
    async login(req, res) {
        try {
            const loginRequest = new LoginRequest(req);
            const errors = await validate(loginRequest);

            if (errors.length > 0) {
                const errorResponse: { [key: string]: string } = {};
                errors.forEach((error: ValidationError) => {
                    Object.keys(error.constraints).forEach(key => {
                        errorResponse[error.property] = error.constraints[key];
                    });
                });
                return res.status(422).json({ errors: errorResponse });
            }
            const result:any = await AuthService.login(req.body);
            return res.status(200).json(new LoginResource(result));
        } catch (error) {
            return res.status(500).json(new Error(error));
        }
    }
}

export default new AuthController();