import { Bookmark } from 'src/modules/bookmark/entities/bookmark.entity';
import { Chapter } from 'src/modules/chapter/entities/chapter.entity';
import { Genre } from 'src/enum';
import { TimestampedEntity } from 'src/lib/abstract-class/abtractEntity';
import { User } from 'src/modules/user/entities/user.entity';
import { Check, Column, Entity, JoinColumn, ManyToOne, OneToMany, Relation } from 'typeorm';
import { Review } from 'src/modules/review/entities/review.entity';

@Entity()
@Check(`"rating" >= 0 AND "rating" <= 1`)
export class Book extends TimestampedEntity {
  @Column()
  title: string;

  @Column({ name: 'user_id' })
  userId: number;

  @Column()
  description: string;

  @Column({ name: 'cover_image' })
  coverImage: string;

  @Column({ type: 'enum', enum: Genre, array: true, nullable: false })
  genres: Genre[];

  @Column({ type: 'int', default: 0 })
  view: number;

  @Column({ type: 'float', default: 0 })
  rating: number;

  @Column()
  finished: boolean;

  @ManyToOne(() => User, (user) => user.books)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;

  @OneToMany(() => Chapter, (chapter) => chapter.book, { onDelete: 'CASCADE' })
  chapters: Relation<Chapter[]>;

  @OneToMany(() => Bookmark, (bookmark) => bookmark.book)
  bookmarks: Relation<Bookmark[]>;

  @OneToMany(() => Review, (review) => review.book)
  reviews: Relation<Review[]>;
}
