import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBorrowDto } from './dto/create-borrow.dto';
import { UpdateBorrowDto } from './dto/update-borrow.dto';

@Injectable()
export class BorrowsService {
  constructor (private prisma: PrismaService) {}
  create(createBorrowDto: CreateBorrowDto) {
    // return 'This action adds a new borrow';
    //if (createBorrowDto.member.status = false){
      return this.prisma.borrow.create({data: createBorrowDto})
      /*} else {
          //return "member terkena penalti"
      }*/
  }

  findAll() {
    // return `This action returns all borrows`;
    this.prisma.borrow.findMany()
  }

  findOne(id: number) {
    // return `This action returns a #${id} borrow`;
    this.prisma.borrow.findFirst({ where: {id}})
  }

  update(id: number, updateBorrowDto: UpdateBorrowDto) {
    // return `This action updates a #${id} borrow`;

    
    this.prisma.borrow.update({
      where: {id},
      data: updateBorrowDto
    })
  }

  remove(id: number) {
    // return `This action removes a #${id} borrow`;
    this.prisma.member.delete({ where: {id}})
  }
}
