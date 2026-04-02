import { Book } from 'src/book/entities/book.entity';
import { BaselineEntity } from 'src/lib/abstract-class/abtractEntity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, Relation } from 'typeorm';

@Entity()
export class Bookmark extends BaselineEntity {
  @Column({ name: 'book_id' })
  bookId: number;

  @Column({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => Book, (book) => book.bookmarks)
  @JoinColumn({ name: 'book_id' })
  book: Relation<Book>;

  @ManyToOne(() => User, (user) => user.bookmarks)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;
}
