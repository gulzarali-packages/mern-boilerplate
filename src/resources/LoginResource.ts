import ApiResponse from '../lib/response/ApiResponse';

interface LoginResourceProps {
    _id: string;
    userName: string;
    email: string;
    token: string;
}

class LoginResource extends ApiResponse {
    constructor(data: LoginResourceProps | LoginResourceProps[]) {
        if(!data){
            super(ApiResponse.error('Invalid email or password'));
        }
        else{
            const formattedData = Array.isArray(data) ? data.map(formatData) : formatData(data);
            super(ApiResponse.success(formattedData, 'Login successful'));
        }
    }
}

function formatData(data: LoginResourceProps): any {
    return {
        id: data._id,
        email: data.email,
        userName: data.userName,
        token:data.token
    };
}

export default LoginResource;
