import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BorrowsService } from './borrows.service';
import { CreateBorrowDto } from './dto/create-borrow.dto';
import { UpdateBorrowDto } from './dto/update-borrow.dto';
import { BorrowsEntity } from './entities/borrow.entity';

@Controller('borrows')
@ApiTags('borrows')
export class BorrowsController {
  constructor(private readonly borrowsService: BorrowsService) {}


  //belum paham relational ORM prisma
  @Post()
  @ApiCreatedResponse( {type: BorrowsEntity})
  create(@Body() createBorrowDto: CreateBorrowDto) {
    return this.borrowsService.create(createBorrowDto);
  }

  //check buku yang sedang dipinjam
  @Get()
  @ApiOkResponse( { type: BorrowsEntity, isArray: true})
  findAll() {
    return this.borrowsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse( { type: BorrowsEntity, isArray: true})
  findOne(@Param('id') id: string) {
    return this.borrowsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse( { type: BorrowsEntity, isArray: true})
  update(@Param('id') id: string, @Body() updateBorrowDto: UpdateBorrowDto) {

    /* lastEntry = this.borrowsService.findOne(+id);
     lastDate = lastEntry.createdAt.getDate()
     recentDate = updateBorrowDto.updatedAt.getDate()
     result = recentdate - lastDate;
    
     if(result >) {

      this.memberservice.updateStatus()
     }

     Author Note: ORM hell moment
    */
    return this.borrowsService.update(+id, updateBorrowDto);
  }

  //pengembalian buku dengan operasi date
  @Delete(':id')
  @ApiOkResponse( { type: BorrowsEntity, isArray: true})
  remove(@Param('id') id: string) {
    
    return this.borrowsService.remove(+id);
  }
}
