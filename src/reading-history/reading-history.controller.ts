import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReadingHistoryService } from './reading-history.service';
import { CreateReadingHistoryDto } from './dto/create-reading-history.dto';
import { UpdateReadingHistoryDto } from './dto/update-reading-history.dto';

@Controller('reading-history')
export class ReadingHistoryController {
  constructor(private readonly readingHistoryService: ReadingHistoryService) {}

  @Post()
  create(@Body() createReadingHistoryDto: CreateReadingHistoryDto) {
    return this.readingHistoryService.create(createReadingHistoryDto);
  }

  @Get()
  findAll() {
    return this.readingHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.readingHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReadingHistoryDto: UpdateReadingHistoryDto) {
    return this.readingHistoryService.update(+id, updateReadingHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readingHistoryService.remove(+id);
  }
}
