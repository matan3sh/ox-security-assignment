import { SearchOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import SelectStatus from '../SelectStatus/SelectStatus'
import { StyledInput, StyledInputContainer } from './Filter.styled'

interface FilterProps {
  handleSearch: (value: string) => void
  handleFilterByStatus: (status?: string) => void
}

const Filter = ({ handleSearch, handleFilterByStatus }: FilterProps) => {
  return (
    <Flex gap={4}>
      <StyledInputContainer align="center">
        <StyledInput
          prefix={<SearchOutlined />}
          placeholder="Type to search"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <SelectStatus
          onChange={(status) => handleFilterByStatus(status)}
          onClear={() => handleFilterByStatus()}
          value={undefined}
          placeholder="Filter by status"
          style={{ width: 300, height: '-webkit-fill-available' }}
          allowClear
        />
      </StyledInputContainer>
    </Flex>
  )
}

export default Filter
