import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService){}
  create(createMemberDto: CreateMemberDto) {
    // return 'This action adds a new member';
    this.prisma.member.create({ data: createMemberDto})
  }

  findAll() {
    // return `This action returns all members`;
    this.prisma.member.findMany()
  }

  findOne(id: number) {
    // return `This action returns a #${id} member`;
    this.prisma.member.findFirst({ where: {id}})
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    // return `This action updates a #${id} member`;
    this.prisma.member.update({
      where: {id},
      data: updateMemberDto
    })
  }

  remove(id: number) {
    this.prisma.member.delete({ where: {id}})
  }
}
