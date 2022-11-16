import { Injectable } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor (private prisma: PrismaService) {}
  create(createBookDto: CreateBookDto) {
    // return 'This action adds a new book';
    return this.prisma.book.create( { data: createBookDto})
  }

  findAll() {
    // return `This action returns all books`;
    return this.prisma.book.findMany( { where: {
      stock : {
        gt: 1
      }
    }})
  }
  findOne(id: number) {
    // return `This action returns a #${id} book`;
    return this.prisma.book.findFirst({
      where: {
        id
      }
    } 
      )
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    // return `This action updates a #${id} book`;
    return this.prisma.book.update({
      where: { id },
      data: updateBookDto,
    });
  }

  remove(id: number) {
    // return `This action removes a #${id} book`;
    return this.prisma.book.delete( { 
      where: {id}
    })
  }
}
