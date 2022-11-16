import { ApiProperty } from "@nestjs/swagger";

export class CreateMemberDto  {
    
    @ApiProperty()   
    id: number;

    @ApiProperty()  
    code: string;

    @ApiProperty()  
    name: string;

    @ApiProperty()
    status: boolean;
}
