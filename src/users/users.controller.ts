import { Body, Controller ,Delete,Get, Param, Patch, Post} from '@nestjs/common';

import { createUser } from './DTO/createUser.dto';
import { updateUser } from './DTO/updateUser.dto';
import { MyuuidPipe } from 'src/commen/pipes/myuuid/myuuid.pipe';
import { UsersService } from './users.service';
import { ObjectId } from 'mongoose';
@Controller('users')

export class UsersController {


constructor(private _UsersService :UsersService){}

 
  
@Get()    
getUSers():Promise<createUser[] >{
    return this._UsersService.getAllUsers()
}

@Post()
addUser(@Body() user:createUser):Promise<string>{

    return this._UsersService.createUser(user)


}
// to get query string @query("x")
@Get(':id') 
getOneUser(@Param("id") id : string,):Promise<createUser | string>{
    
 return this._UsersService.getOneUSer(id)
}
  
@Patch(':id')
updateUser(@Param("id") id :ObjectId , @Body()data : updateUser):Promise<createUser>{
    return this._UsersService.updateUser(id,data)
}

@Delete(":id")
deleteUser(@Param('id') id : ObjectId):Promise<string>{

    return this._UsersService.deleteUser(id)




}
}

