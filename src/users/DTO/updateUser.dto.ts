import { OmitType, PartialType } from "@nestjs/mapped-types";
import { createUser } from "./createUser.dto";

export class updateUser extends PartialType(OmitType(createUser,["password"] as const)) {



}