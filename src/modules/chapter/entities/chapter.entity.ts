import { Book } from 'src/modules/book/entities/book.entity';
import { Comment } from 'src/modules/comment/entities/comment.entity';
import { TimestampedEntity } from 'src/lib/abstract-class/abtractEntity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Relation } from 'typeorm';

@Entity()
export class Chapter extends TimestampedEntity {
  @Column()
  index: number;

  @Column({ name: 'book_id' })
  bookId: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ type: 'int', default: 0 })
  fee: number;

  @ManyToOne(() => Book, (book) => book.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'book_id' })
  book: Relation<Book>;

  @OneToMany(() => Comment, (comment) => comment.chapter)
  comments: Relation<Comment[]>;
}
