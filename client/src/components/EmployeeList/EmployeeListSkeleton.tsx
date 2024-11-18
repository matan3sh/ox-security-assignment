import { Skeleton } from 'antd'
import { StyledEmployeesList } from './EmployeeList.styled'

const EmployeeListSkeleton = () => {
  return (
    <StyledEmployeesList>
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton.Node active key={index} style={{ width: 275 }} />
      ))}
    </StyledEmployeesList>
  )
}

export default EmployeeListSkeleton
