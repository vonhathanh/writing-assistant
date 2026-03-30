import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Environment } from './enum';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { ChapterModule } from './chapter/chapter.module';
import { CommentModule } from './comment/comment.module';
import { ReviewModule } from './review/review.module';
import { ReadingHistoryModule } from './reading-history/reading-history.module';
import { LibraryModule } from './library/library.module';

// forRoot(): global initialization
// - configure a module once for the whole app
// - shared/singleton
// - usually called in app.module
// - example: setup db connection, configure external services such as: queue, redis cache

// forFeature(): module-level initialization
// - use/extend modules initialized by forRoot()
// - register feature-specific providers
// - called inside feature modules
// - example: TypeOrmModule.forFeature([User]) -> create User repository and make it injectable in that module

@Module({
  // Optional list of imported modules that export the providers which are required in this module.
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV == Environment.DEV,
    }),
    UserModule,
    BookModule,
    ChapterModule,
    CommentModule,
    ReviewModule,
    ReadingHistoryModule,
    LibraryModule,
  ],
  // controllers: responsible for handling incoming requests and sending responses back to the client
  controllers: [AppController],
  // services, repositories, factories, helpers... They can be injected as dependency. Nest handles the responsibility
  // of wiring up these objects together
  providers: [AppService],
})
export class AppModule {}
