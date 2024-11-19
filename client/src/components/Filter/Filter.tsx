import { SearchOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import SelectStatus from '../SelectStatus/SelectStatus'
import { EmpoyeeStatus } from '../SelectStatus/SelectStatus.config'
import { StyledInput, StyledInputContainer } from './Filter.styled'

interface FilterProps {
  statusFilter: EmpoyeeStatus
  searchValue: string
  handleSearch: (value: string) => void
  handleFilterByStatus: (status?: string) => void
}

const Filter = ({
  statusFilter,
  searchValue,
  handleSearch,
  handleFilterByStatus,
}: FilterProps) => {
  return (
    <Flex gap={4}>
      <StyledInputContainer align="center">
        <StyledInput
          prefix={<SearchOutlined />}
          placeholder="Type to search"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchValue}
        />
        <SelectStatus
          onChange={(status) => handleFilterByStatus(status)}
          onClear={() => handleFilterByStatus()}
          value={statusFilter}
          placeholder="Filter by status"
          style={{ width: 300, height: '-webkit-fill-available' }}
          allowClear
        />
      </StyledInputContainer>
    </Flex>
  )
}

export default Filter
