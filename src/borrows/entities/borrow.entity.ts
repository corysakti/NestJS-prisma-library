import { ApiProperty } from "@nestjs/swagger";
import { Borrow } from "@prisma/client";


export class BorrowsEntity implements Borrow {
    

    @ApiProperty()
    id: number;

    @ApiProperty()
    nameMember: string;

    @ApiProperty()
    titleBook: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    stock: number;

    @ApiProperty()
    updatedAt: Date;
}
