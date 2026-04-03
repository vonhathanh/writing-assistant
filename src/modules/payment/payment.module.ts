import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethod } from './entities/payment-method.entity';
import { PaymentHistory } from './entities/payment-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethod, PaymentHistory])],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
