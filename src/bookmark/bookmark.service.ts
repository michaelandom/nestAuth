import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookMarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}
  createBookMark(id: number, dto: CreateBookMarkDto) {
    const bookmark = this.prisma.bookmark.create({
      data: { ...dto, userId: id },
    });

    return bookmark;
  }
  getAllBookmark(id: number) {
    const bookmarks = this.prisma.bookmark.findMany({
      where: { userId: id },
    });

    return bookmarks;
  }

  getById(userId: number, id: number) {
    const bookmark = this.prisma.bookmark.findUnique({
      where: { id: id },
    });

    return bookmark;
  }
}
