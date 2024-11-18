import { Flex } from 'antd'
import { useState } from 'react'
import { useUpdateEmployeeStatus } from '../../hooks/useUpdateEmployeeStatus'
import SelectStatus from '../SelectStatus/SelectStatus'
import { EmpoyeeStatus } from '../SelectStatus/SelectStatus.config'
import {
  StyledEmployeeImage,
  StyledEmployeeItem,
  StyledEmplyeeName,
} from './EmplyeeItem.styled'

interface EmplyeeItemProps {
  id: number
  image: string
  name: string
  status: EmpoyeeStatus
}

const EmplyeeItem = ({ id, image, name, status }: EmplyeeItemProps) => {
  const updateUserStatusMutation = useUpdateEmployeeStatus()
  const [emplyeeStatus, setEmplyeeStatus] = useState(status)

  const handleStatusChange = (newStatus: EmpoyeeStatus) => {
    setEmplyeeStatus(newStatus)
    updateUserStatusMutation.mutate({ userId: id, status: newStatus })
  }

  return (
    <StyledEmployeeItem>
      <Flex gap={12}>
        <StyledEmployeeImage src={image} alt={name} width={100} height={100} />
        <Flex vertical justify="flex-end" align="flex-start">
          <StyledEmplyeeName>{name}</StyledEmplyeeName>
          <SelectStatus
            value={emplyeeStatus}
            onChange={(newStatus) => handleStatusChange(newStatus)}
            style={{ width: 175 }}
          />
        </Flex>
      </Flex>
    </StyledEmployeeItem>
  )
}

export default EmplyeeItem
