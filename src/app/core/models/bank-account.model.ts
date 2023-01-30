export class BankAccount
{
    accountType: 'invest' | 'current';
    number: string;

    constructor(accountType: 'invest' | 'current', number: string)
    {
        this.accountType = accountType;
        this.number = number;
    }
}
