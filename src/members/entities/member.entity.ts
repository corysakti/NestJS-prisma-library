import { ApiProperty } from "@nestjs/swagger";
import { Member } from "@prisma/client";

export class MembersEntity implements Member {
    
    @ApiProperty()
    id: number;

    @ApiProperty()
    code: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    status: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
