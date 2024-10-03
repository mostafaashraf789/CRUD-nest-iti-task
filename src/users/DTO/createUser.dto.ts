
// for validtation this class like interFace passing it to type of get data from body

import { IsEmail, isNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class createUser {
    // @IsOptional()
    // id? : string

    @IsString()
    @Length(3,50,{message:'name must be between 3 and 50 char'})
    name : string ;

    @IsEmail({},{message:"invalid email"})
    @IsString()
    email : string ;

    @IsString()
    password : string ;
}