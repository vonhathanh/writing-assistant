import { BaselineEntity } from 'src/lib/abstract-class/abtractEntity';
import { Check, Column, Entity, JoinColumn, ManyToOne, OneToOne, Relation } from 'typeorm';
import { PaymentMethod } from './payment-method.entity';
import { User } from 'src/user/entities/user.entity';
import { PaymentStatus, PaymentType } from 'src/enum';

@Entity()
@Check(`"amount" > 0`)
export class PaymentHistory extends BaselineEntity {
  @Column({ name: 'user_id' })
  userId: number;

  // payment method can't be null with the following payment types: DEPOSIT, WITHDRAWAL
  // PURCHASE, REFUND, DONATION will deduct the amount from the user's balance
  @Column({ name: 'payment_method_id', nullable: true })
  paymentMethodId: number;

  @Column({ name: 'payment_type', type: 'enum', enum: PaymentType, nullable: false })
  paymentType: PaymentType;

  // status = PROCESSING or CANCELLED only happens when the payment types are DEPOSIT, WITHDRAWAL
  @Column({ enum: PaymentStatus, type: 'enum', nullable: false })
  status: PaymentStatus;

  @Column({ type: 'bigint', nullable: false })
  amount: number;

  @ManyToOne(() => PaymentMethod, (paymentMethod) => paymentMethod.paymentHistories, {
    nullable: true,
  })
  @JoinColumn({ name: 'payment_method_id' })
  paymentMethod: Relation<PaymentMethod>;

  @ManyToOne(() => User, (user) => user.paymentHistories)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;
}
