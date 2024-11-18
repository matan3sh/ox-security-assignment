import EmplyeeItem from '../EmployeeItem/EmplyeeItem'
import { EmpoyeeStatus } from '../SelectStatus/SelectStatus.config'
import { StyledEmployeesList } from './EmployeeList.styled'

type Employee = {
  id: number
  img: string
  name: string
  status: EmpoyeeStatus
}

interface EmployeesListProps {
  employees: Employee[]
}

const EmployeesList = ({ employees }: EmployeesListProps) => {
  return (
    <StyledEmployeesList>
      {employees.map((employee) => (
        <EmplyeeItem
          key={employee.id}
          id={employee.id}
          image={employee.img}
          name={employee.name}
          status={employee.status}
        />
      ))}
    </StyledEmployeesList>
  )
}

export default EmployeesList
