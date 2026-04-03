import { Chapter } from 'src/modules/chapter/entities/chapter.entity';
import { TimestampedEntity } from 'src/lib/abstract-class/abtractEntity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, Relation } from 'typeorm';

@Entity()
export class Comment extends TimestampedEntity {
  @Column()
  content: string;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'chapter_id' })
  chapterId: number;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;

  @ManyToOne(() => Chapter, (chapter) => chapter.comments)
  @JoinColumn({ name: 'chapter_id' })
  chapter: Relation<Chapter>;
}
