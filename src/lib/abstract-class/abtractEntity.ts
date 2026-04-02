import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
