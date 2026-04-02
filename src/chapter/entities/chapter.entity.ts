import { Book } from 'src/book/entities/book.entity';
import { AbstractEntity } from 'src/lib/abstract-class/abtractEntity';
import { Column, Entity, JoinColumn, ManyToOne, Relation } from 'typeorm';

@Entity()
export class Chapter extends AbstractEntity {
  @Column()
  index: number;

  @Column({ name: 'book_id' })
  bookId: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => Book, (book) => book.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'book_id' })
  book: Relation<Book>;
}
