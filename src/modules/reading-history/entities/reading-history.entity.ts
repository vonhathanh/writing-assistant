import { TimestampedEntity } from 'src/lib/abstract-class/abtractEntity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, Relation } from 'typeorm';

@Entity()
export class ReadingHistory extends TimestampedEntity {
  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'book_id' })
  bookId: number;

  @Column({ name: 'chapter_id' })
  chapterId: number;

  @ManyToOne(() => User, (user) => user.readingHistories)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;
}
