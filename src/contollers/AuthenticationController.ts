import {AuthenticationService} from '@services/AuthenticationService';
import { LoginRequest } from '@requests/LoginRequest';
import { validate } from 'class-validator';

export class AuthenticationController {
    private authenticationService: AuthenticationService;
    
    async login(request, response) {
        try {
            const loginRequest = new LoginRequest(request.body.email, request.body.password);
            const errors = await validate(loginRequest);

            if (errors.length > 0) {
                return response.status(422).json({ errors });
            }
            return this.authenticationService.login(request);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ message: 'Internal server error' });
        }
    }
}
