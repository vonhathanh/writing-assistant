import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export abstract class BaselineEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;
}

export abstract class AbstractEntity extends BaselineEntity {
  @CreateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
