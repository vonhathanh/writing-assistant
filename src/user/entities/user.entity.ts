import { BaseEntity } from 'src/lib/abstract-class/baseEntity';
import { Column, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'jsonb', default: null})
  metadata: any
}
