export enum EmpoyeeStatus {
  Working = 'Working',
  OnVacation = 'On Vacation',
  BusinessTrip = 'Business Trip',
  LunchTime = 'Lunch Time',
}

export const EmpyeeStatusColors: Record<EmpoyeeStatus, string> = {
  [EmpoyeeStatus.Working]: '#52c41a',
  [EmpoyeeStatus.OnVacation]: '#faad14',
  [EmpoyeeStatus.BusinessTrip]: '#1890ff',
  [EmpoyeeStatus.LunchTime]: '#722ed1',
}
