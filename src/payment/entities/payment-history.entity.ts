import { BaselineEntity } from 'src/lib/abstract-class/abtractEntity';
import { Check, Column, Entity, JoinColumn, ManyToOne, OneToOne, Relation } from 'typeorm';
import { PaymentMethod } from './payment-method.entity';
import { User } from 'src/user/entities/user.entity';

export enum PaymentType {
  DEPOSIT = 'deposit',
  WITHDRAWAL = 'withdrawal',
  PURCHASE = 'purchase',
  REFUND = 'refund',
  DONATION = 'donation',
}

export enum PaymentStatus {
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELED = 'canceled',
}

@Entity()
@Check(`"amount" > 0`)
export class PaymentHistory extends BaselineEntity {
  @Column({ name: 'user_id' })
  userId: number;

  // payment method can't be null with the following payment types: DEPOSIT, WITHDRAWAL
  // PURCHASE, REFUND, DONATION will deduct the amount from the user's balance
  @Column({ name: 'payment_method_id', nullable: true })
  paymentMethodId: number;

  @Column({ name: 'payment_type', enum: PaymentType, nullable: false })
  paymentType: PaymentType;

  // status = PROCESSING or CANCELLED only happens when the payment types are DEPOSIT, WITHDRAWAL
  @Column({ enum: PaymentStatus, nullable: false })
  status: PaymentStatus;

  @Column({ type: 'bigint', nullable: false })
  amount: number;

  @OneToOne(() => PaymentMethod, { nullable: true })
  paymentMethod: PaymentMethod;

  @ManyToOne(() => User, (user) => user.paymentHistories)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;
}
