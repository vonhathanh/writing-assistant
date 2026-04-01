import { Genre } from 'src/enum';
import { AbstractEntity } from 'src/lib/abstract-class/abtractEntity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, Relation, UpdateDateColumn } from 'typeorm';

@Entity()
export class Book extends AbstractEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  cover_image: string;

  @Column({ type: 'enum', enum: Genre, array: true, nullable: false })
  genres: Genre[];

  @Column({ type: 'int', default: 0 })
  view: number;

  @UpdateDateColumn() 
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.books)
  user: Relation<User>;
}
