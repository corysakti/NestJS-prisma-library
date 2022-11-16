import { ApiProperty } from "@nestjs/swagger";

export class CreateBorrowDto {
    @ApiProperty()   
    id: number;

    @ApiProperty()  
    nameMember: string;

    @ApiProperty()  
    titleBook: string;

    @ApiProperty()
    stock: number

}
