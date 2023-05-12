import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import {
  CreateOneUserArgs,
  DeleteOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  User
} from "@okkino/api/generated-db-types";

@Resolver(() => User)

export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args() CreateOneUserArgs: CreateOneUserArgs) {
    return this.userService.create(CreateOneUserArgs);
  }

  @Query(() => [User])
  users() {
    return this.userService.findAll();
  }

  @Query(() => User)
  user(@Args('id', { type: () => Int }) findUniqueUserArgs: FindUniqueUserArgs) {
    return this.userService.findOne(findUniqueUserArgs);
  }

  @Mutation(() => User)
  updateUser(@Args() updateOneUserArgs: UpdateOneUserArgs) {
    return this.userService.update(updateOneUserArgs);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) deleteOneUserArgs: DeleteOneUserArgs) {
    return this.userService.remove(deleteOneUserArgs);
  }
}
