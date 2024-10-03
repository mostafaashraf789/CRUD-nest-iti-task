import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'UserModel',schema:userSchema}])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
