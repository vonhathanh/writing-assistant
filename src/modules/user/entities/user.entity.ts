import { Book } from 'src/modules/book/entities/book.entity';
import { Bookmark } from 'src/modules/bookmark/entities/bookmark.entity';
import { Comment } from 'src/modules/comment/entities/comment.entity';
import { AbstractEntity } from 'src/lib/abstract-class/abtractEntity';
import { PaymentHistory } from 'src/modules/payment/entities/payment-history.entity';
import { PaymentMethod } from 'src/modules/payment/entities/payment-method.entity';
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
  books: Relation<Book[]>;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Relation<Comment[]>;

  @OneToMany(() => Bookmark, (bookmark) => bookmark.user)
  bookmarks: Relation<Bookmark[]>;

  @OneToMany(() => PaymentMethod, (paymentMethod) => paymentMethod.user)
  paymentMethods: Relation<PaymentMethod[]>;

  @OneToMany(() => PaymentHistory, (paymentHistory) => paymentHistory.user)
  paymentHistories: Relation<PaymentHistory[]>;
}
