import { Book } from 'src/book/entities/book.entity';
import { AbstractEntity } from 'src/lib/abstract-class/abtractEntity';
import { Column, Entity, OneToMany, Relation } from 'typeorm';

@Entity()
export class User extends AbstractEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ type: 'jsonb', default: null })
  metadata: any;

  @OneToMany(() => Book, (book) => book.user)
  // we use Relation<Book[]> instead of Book[] to avoid circular dependency issues
  // this only happens when we compile the code by swc
  books: Relation<Book[]>; //
}
