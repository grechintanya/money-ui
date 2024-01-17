import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { Account, Category, OperartionExtra, Operation, opType } from '../utils/models';
import {
  AppState, categoryActions, categorySelectors, accountActions, accountSelectors,
  opActions, opSelectors
} from '../store';



@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.opType = 'expense';
    this.store.dispatch(categoryActions.getCategories());
    this.store.dispatch(accountActions.getAccounts());
    this.store.dispatch(opActions.getOperations());

    this.expenseCategories$ = this.store.select(categorySelectors.selectExpenseCategory);
    this.incomeCategories$ = this.store.select(categorySelectors.selectIncomeCategory);
    this.accounts$ = this.store.select(accountSelectors.selectAccontsList);
    this.accounts$.subscribe((accounts) => {
      this.totalBalance = accounts.reduce((prev, cur) => prev + cur.balance, 0)
    });
    this.operations$ = this.store.select(opSelectors.selectOpList)
    /* .pipe(
      map(operations => operations.map(op => {
        return {
          ...op,
          account$: this.store.select(accountSelectors.selectAccountById(op.accountId)),
          recipientAccount$: this.store.select(accountSelectors.selectAccountById(op.recipientAccountId)),
          category$: this.store.select(categorySelectors.selectCategoryById(op.categoryId))
        }
      })
      )) */
    this.operations$.subscribe(operations => {
      this.operations = operations.map(op => {
        return {
          ...op,
          account: this.store.select(accountSelectors.selectAccountById(op.accountId)),
          recipientAccount: this.store.select(accountSelectors.selectAccountById(op.recipientAccountId)),
          category: this.store.select(categorySelectors.selectCategoryById(op.categoryId))
        }
      })
    })
  }

  opType!: opType;
  expenseCategories$!: Observable<Category[]>;
  incomeCategories$!: Observable<Category[]>;
  accounts$!: Observable<Account[]>;
  operations$!: Observable<OperartionExtra[]>;
  operations!: OperartionExtra[];

  totalBalance!: number;

  operationForm = new FormGroup({
    account: new FormControl(''),
    account2: new FormControl(''),
    category: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(''),
    comment: new FormControl('')
  })

  onAddAccountButtonClick() {
    //console.log("Новий рахунок додано!")
    console.log('operations: ', this.operations);
  }

  onOpFormSubmit() {
    console.log('Нову витрату записано')
  }

  onExpenseClicked() {
    this.opType = 'expense';
  }

  onTransferClicked() {
    this.opType = 'transfer';
  }

  onIncomeClicked() {
    this.opType = 'income';
  }
}
