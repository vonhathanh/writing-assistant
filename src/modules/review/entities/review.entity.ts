import { TimestampedEntity } from 'src/lib/abstract-class/abtractEntity';
import { Book } from 'src/modules/book/entities/book.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne, Relation } from 'typeorm';

@Entity()
export class Review extends TimestampedEntity {
  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'book_id' })
  bookId: number;

  @Column({ type: 'bool', nullable: false })
  recommended: boolean;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @ManyToOne(() => User, (user) => user.reviews)
  user: Relation<User>;

  @ManyToOne(() => Book, (book) => book.reviews)
  book: Relation<Book>;
}
