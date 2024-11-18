import { EmpoyeeStatus } from '../SelectStatus/SelectStatus.config'

export type Employee = {
  id: number
  img: string
  name: string
  status: EmpoyeeStatus
}
