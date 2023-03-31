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
    email!: string;

    @IsDefined()
    @IsString()
    @MinLength(8)
    password!: string;

    constructor(email = '', password = '') {
        this.email = email;
        this.password = password;
    }
}
