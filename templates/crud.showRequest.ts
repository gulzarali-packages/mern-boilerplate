import {
    IsDefined,
    IsEmail,
    IsString,
    MinLength
} from 'class-validator';

export class templateNameShowRequest {
    // @IsDefined()
    // @IsString()
    // @IsEmail()
    // email!:     string;

    constructor(request) {
       // this.email      = request?.body?.email;
    }
}