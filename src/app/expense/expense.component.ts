import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Expense } from './expense-model';

@Component(
  { selector: 'app-expense', 
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expense_string : string  = "Hi there"; 

  exp1 : Expense = {
    id: 1,
    name: "Omo",
    amount: 50,
    category: "product",
    date: "string"
  };

  exp2 : Expense = {
    id: 2,
    name: "Bread",
    amount: 500,
    category: "product",
    date: "string"
  };

  expenses : any = [];
  
  constructor() { 
    this.expenses.push(this.exp1);
    this.expenses.push(this.exp2);
  }

  ngOnInit(): void {
  }

}
