import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { UserInterface } from './user.interface';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('parents')
@Controller('parents')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() userData: UserDto) {
    return this.userService.createUser(userData);
  }

  @Get()
  async findAll(): Promise<UserInterface[]> {
    return this.userService.findAll();
  }

  @Put(':id')
  async updateUse(
    @Param('id', ParseIntPipe) id: number,
    @Body() userData: UpdateUserDto,
  ): Promise<UserInterface> {
    return this.userService.updateUser(id, userData);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserInterface> {
    return this.userService.findOne(id);
  }

  @Post(':id/kid')
  @UsePipes(ValidationPipe)
  async createKids(
    @Param('id', ParseIntPipe) id: number,
    @Body() userData: UserDto,
  ) {
    return this.userService.addKids(id, userData);
  }
}
