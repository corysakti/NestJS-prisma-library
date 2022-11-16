import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MembersEntity } from './entities/member.entity';

@Controller('members')
@ApiTags('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @ApiCreatedResponse( {type: MembersEntity})
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }


  
  @Get()
  @ApiOkResponse( { type: MembersEntity, isArray: true})
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse( { type: MembersEntity, isArray: true})
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(+id);
  }

  @Patch(':id')
  //update status member
  @ApiOkResponse( { type: MembersEntity, isArray: true})
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.membersService.update(+id, updateMemberDto);
  }

  @Delete(':id')
  @ApiOkResponse( { type: MembersEntity, isArray: true})
  remove(@Param('id') id: string) {
    return this.membersService.remove(+id);
  }
}
