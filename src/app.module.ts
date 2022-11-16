import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BooksModule } from './books/books.module';
import { MembersModule } from './members/members.module';
import { BorrowModule } from './borrow/borrow.module';
import { BorrowsModule } from './borrows/borrows.module';

@Module({
  imports: [PrismaModule, BooksModule, MembersModule, BorrowModule, BorrowsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
