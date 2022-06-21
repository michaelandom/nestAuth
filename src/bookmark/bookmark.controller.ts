import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { BookmarkService } from './bookmark.service';
import { CreateBookMarkDto } from './dto';
@UseGuards(JwtGuard)
@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}
  @Post()
  createBookMark(@GetUser('id') id: number, @Body() dto: CreateBookMarkDto) {
    return this.bookmarkService.createBookMark(id, dto);
  }

  @Get()
  getAllBookmark(@GetUser('id') userid: number) {
    return this.bookmarkService.getAllBookmark(userid);
  }

  @Get()
  getById(@GetUser('id') userId: number, id: number) {
    return this.bookmarkService.getById(userId, id);
  }
}
