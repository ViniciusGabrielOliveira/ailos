import { BankAccount } from './bank-account.model';

export class CpfStatusResponse
{
    cpf: number;
    name: string;
    status: string;
    accounts: Array<BankAccount>

    constructor(
        cpf: number,
        name: string,
        status: 'regular' | 'irregular',
        accounts: Array<BankAccount>
    )
    {
        this.cpf = cpf
        this.name = name;
        this.status = status;
        this.accounts = accounts;
    }
}
