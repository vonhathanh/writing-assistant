export const enum Environment {
  DEV = 'development',
  PROD = 'production',
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  MODERATOR = 'moderator',
}

export enum Genre {
  FANTASY = 'Fantasy',
  ROMANCE = 'Romance',
  MYSTERY = 'Mystery',
  SCIENCE_FICTION = 'Science Fiction',
  HORROR = 'Horror',
  HISTORICAL = 'Historical',
  ACTION = 'Action',
}

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

export enum PaymentOption {
  CREDIT_CARD = 'credit_card',
  PAYPAL = 'paypal',
  BANK_TRANSFER = 'bank_transfer',
  CRYPTOCURRENCY = 'cryptocurrency',
}
