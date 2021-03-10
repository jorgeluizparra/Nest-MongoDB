import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExpenseDocument = Expense & Document;

@Schema()
export class Expense {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  amount: number;

}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
