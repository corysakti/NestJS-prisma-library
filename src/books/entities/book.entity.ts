import { ApiProperty } from "@nestjs/swagger";
import { Book } from "@prisma/client";

export class BookEntity implements Book {
    
    @ApiProperty()
    id: number;

    @ApiProperty()
    code: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    author: string;

    @ApiProperty()
    stock: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
