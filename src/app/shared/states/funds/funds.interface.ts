import { EntityState } from '@ngrx/entity';

export interface IAccount {
  id: number;
  portfolioId: string;
}

export interface IFund {
  id: number;
  name: string;
  accounts: IAccount[];
}

export interface IFundState extends EntityState<IFund> {}
