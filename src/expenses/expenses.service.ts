import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Expense, ExpenseDocument } from './schemas/expenses.schema';
import { CreateExpenseDto } from './dto/createExpense.dto';

@Injectable()
export class ExpensesService {
    constructor(@InjectModel(Expense.name) private expenseModel: Model<ExpenseDocument>) {}

    async create(data: CreateExpenseDto): Promise<Expense> {
        const expense = new this.expenseModel(data);
        return expense.save();
    }

    async findAll(): Promise<Expense[]> {
        return this.expenseModel.find().exec();
    }

    async findOne(id: string): Promise<Expense> {
        return this.expenseModel.findById(id).exec();
    }

    async delete(id: string): Promise<Expense> {
        return this.expenseModel.findByIdAndDelete(id).exec();
    }
}
