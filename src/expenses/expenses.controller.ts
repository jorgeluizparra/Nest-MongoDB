import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';

import { CreateExpenseDto } from './dto/createExpense.dto';

import { Expense } from './schemas/expenses.schema';

import { ExpensesService } from './expenses.service'

@Controller('expenses')
export class ExpensesController {
    constructor(private expensesService: ExpensesService) {}

    @Post()
    create(@Body() body: CreateExpenseDto): Promise<Expense> {
        return this.expensesService.create(body);
    }

    @Get()
    getAll(): Promise<Expense[]> {
        return this.expensesService.findAll();
    }

    @Get(':id')
    getOne(@Param() params): Promise<Expense> {
        return this.expensesService.findOne(params.id);
    }

    @Delete(':id')
    delete(@Param() params): Promise<Expense> {
        return this.expensesService.delete(params.id);
    }
}
