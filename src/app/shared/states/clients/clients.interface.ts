import { EntityState } from '@ngrx/entity';
import { IFund } from '../funds/funds.interface';

export interface IClient {
  id: number;
  name: string;
  funds: IFund[];
}

export interface IClientState extends EntityState<IClient> {}
