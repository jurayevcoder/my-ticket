import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './models/status.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Holatlar')
@Controller('status')
export class StatusController {
    constructor(private readonly statusService: StatusService) { }

    @ApiOperation({ summary: "Holatni yaratish" })
    @Post("create")
    async createStatus(@Body() createStatusDto: CreateStatusDto): Promise<Status> {
        return this.statusService.createStatus(createStatusDto);
    }

    @ApiOperation({ summary: "Holatni ko'rish" })
    @Get('find-all')
    async getAllStatus() {
        return this.statusService.getAllStatus();
    }

    @ApiOperation({ summary: "Holatni ID si bo'yicha ko'rish" })
    @Get('find/:id')
    async getOneStatus(@Param("id") id: string): Promise<Status> {
        return this.statusService.getOneStatus(id);
    }

    @ApiOperation({ summary: "Holatni ID si bo'yicha o'chirish" })
    @Delete('delete/:id')
    async delOneStatus(@Param("id") id: string) {
        return this.statusService.delOneStatus(id);
    }

    @ApiOperation({ summary: "Holatni ID si bo'yicha o'zgartirish" })
    @Put("update/:id")
    async updateStatus(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
        return this.statusService.updateStatus(id, updateStatusDto);
    }
}
