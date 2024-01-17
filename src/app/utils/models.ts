import { Observable } from "rxjs";

export interface Login {
    email: string,
    password: string
};

export interface User {
    email?: string,
    password?: string,
    username?: string,
    token?: string
};

export type opType = 'expense' | 'income' | 'transfer';

export interface Account {
    _id?: string,
    name: string,
    balance: number
};

export interface Category {
    _id?: string,
    name: string,
    type: 'expense' | 'income'
};

export type Currency = 'грн.'

export interface Account {
    _id?: string,
    name: string,
    mandatory: boolean,
    currency: Currency,
    balance: number
};

export interface Operation {
    _id?: string,
    type: opType,
    amount: number,
    date: Date | string;
    currency: Currency;
    accountId: string;
    categoryId?: string;
    comment?: string;
    recipientAccountId: string;
}

export interface OperartionExtra extends Operation {
    account?: Observable<Account | null | undefined>,
    category?: Observable<Category | null | undefined>,
    recipientAccount?: Observable<Account | null | undefined>
}