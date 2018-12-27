export interface IUserDefaults {
  workspaceId: number;
  clientId: number;
  indexId: number | string;
  timePeriodId: number | string;
}

export interface IUserPreference {
  id: number | string;
  name: string;
  defaults?: IUserDefaults;
}
