import {
    IsDefined,
    IsEmail,
    IsString,
    MinLength
} from 'class-validator';

export class RegisterRequest {
    @IsDefined()
    @IsString()
    @IsEmail()
    email!: string;

    @IsDefined()
    @IsString()
    @MinLength(8)
    password!: string;

    @IsDefined()
    @IsString()
    userName!: string;

    constructor(request) {
        this.userName   = request.body.userName;
        this.email      = request.body.email;
        this.password   = request.body.password;
    }
}