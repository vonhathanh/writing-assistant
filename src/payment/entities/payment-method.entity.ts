import { AbstractEntity } from 'src/lib/abstract-class/abtractEntity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, Relation } from 'typeorm';

export enum PaymentOption {
  CREDIT_CARD = 'credit_card',
  PAYPAL = 'paypal',
  BANK_TRANSFER = 'bank_transfer',
  CRYPTOCURRENCY = 'cryptocurrency',
}

@Entity()
export class PaymentMethod extends AbstractEntity {
  @Column({ name: 'user_id' })
  userId: number;

  @Column({
    name: 'payment_option',
    type: 'enum',
    enum: PaymentOption,
    nullable: false,
  })
  paymentOption: PaymentOption;

  @Column({ name: 'description', nullable: true })
  description: string;

  @Column({ name: 'enabled', default: true })
  enabled: boolean;

  @Column({ name: 'metadata', type: 'jsonb', nullable: true })
  metadata: any;

  @ManyToOne(() => User, (user) => user.paymentMethods)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;
}
