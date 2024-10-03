import { BadRequestException, Injectable ,NotFoundException } from '@nestjs/common';
import { createUser } from './DTO/createUser.dto';
import { v4 as uuid} from 'uuid';
import { updateUser } from './DTO/updateUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User } from './schema/user.schema';

@Injectable()
export class UsersService {

    constructor(@InjectModel('UserModel') private UserModel : Model<User> ){}

 

     async getAllUsers():Promise<createUser[] > {
       try {
        const users = await this.UserModel.find();
        if (users.length == 0) {
           throw new NotFoundException("no users added")
        }
        return users ;
       } catch (error) {
            throw new BadRequestException(error.message)
       } 
    }

   async getOneUSer(id : string):Promise<createUser >{
        try {
            const user = await this.UserModel.findOne({_id :id})

        if (!user) {
            throw new NotFoundException("user not found")
        }
        return user ;
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }

async createUser(userData : createUser):Promise<string>{
  
 try {
     await  this.UserModel.create(userData)
  return "user added successfully"
 } catch (error) {
    throw new BadRequestException(error.message)
 }
}

async updateUser(id:ObjectId,userData : updateUser):Promise<createUser>{
   
 try {
    const UpdatedUser = await this.UserModel.findOneAndUpdate({_id :id},userData,{new:true,runValidators:true})
    return UpdatedUser ;
 
 } catch (error) {
    throw new BadRequestException(error.message)
 }
}

async deleteUser(id:ObjectId):Promise<string>{

    try {
        await this.UserModel.findByIdAndDelete(id);
    return "deleted successfully";
    } catch (error) {
        throw new BadRequestException(error.message)
    }
}

}
