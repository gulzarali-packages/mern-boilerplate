import { User } from '@models/User';

export class AuthenticationService {
    async login(request){
        let user = await User.findOne({ email:request.email, password:request.password });
        if(user){
            return 
        }
    }
}