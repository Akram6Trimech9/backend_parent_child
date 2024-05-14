// user.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserInterface } from './user.interface';
 import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<UserInterface>,
  ) {}

  async createUser(newUser: UserDto): Promise<UserInterface> {
    return await  this.userRepository.save(newUser);
  }
  async updateUser(userId : number  , updateUser: UpdateUserDto ): Promise<UserInterface> {
     const user = await   this.userRepository.findOneBy({
        id :userId
     })
     if (!user) {
        throw new NotFoundException('user not found');
    }
         Object.assign(user,updateUser)

    return await  this.userRepository.save(user);
  }

  async findAll(): Promise<UserInterface[]> {
     const users = await   this.userRepository.find()
     if (!users) {
        throw new NotFoundException('there is no users ');
    }
    return users
}
  async findOne(id : number): Promise<UserInterface> {
     const user = await   this.userRepository.findOne({
      where: {id : id},
      relations: ['children']

     })
     if (!user) {
        throw new NotFoundException('user not found');
    }
    return user
}

async addKids(id:number , userData : UserDto) : Promise<UserInterface>{
   const  findParent = await  this.userRepository.findOne({
    where : {id : id},
       relations: ['children']
   })

   const addKid =  await this.userRepository.save(userData)
    findParent.children.push(addKid)

  const addKidParent = await  this.userRepository.save(findParent)

  return addKidParent
}
}
