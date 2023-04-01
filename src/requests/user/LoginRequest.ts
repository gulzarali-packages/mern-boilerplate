import {
    IsDefined,
    IsEmail,
    IsString,
    MinLength
} from 'class-validator';

export class LoginRequest {
    @IsDefined()
    @IsString()
    @IsEmail()
    email!:     string;

    @IsDefined()
    @IsString()
    @MinLength(8)
    password!: string;

    constructor(request) {
        this.email      = request?.body?.email;
        this.password   = request?.body?.password;
    }
}