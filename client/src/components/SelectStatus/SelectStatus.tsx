import { Flex, Select } from 'antd'
import { EmpoyeeStatus, EmpyeeStatusColors } from './SelectStatus.config'
import { StyledDot } from './SelectStatus.styled'

interface SelectStatusProps {
  onChange: (value: EmpoyeeStatus) => void
  value?: EmpoyeeStatus
  onClear?: () => void
  placeholder?: string
  style?: React.CSSProperties
  allowClear?: boolean
}

const SelectStatus = ({
  value,
  onChange,
  onClear,
  placeholder,
  style,
  allowClear,
}: SelectStatusProps) => {
  const options = Object.values(EmpoyeeStatus).map((status) => ({
    value: status,
    label: (
      <Flex gap={6} align="center">
        <StyledDot color={EmpyeeStatusColors[status as EmpoyeeStatus]} />
        <span>{status}</span>
      </Flex>
    ),
  }))

  return (
    <Select
      style={style}
      optionFilterProp="label"
      options={options}
      value={value}
      onChange={onChange}
      onClear={onClear}
      placeholder={placeholder}
      allowClear={allowClear}
    />
  )
}

export default SelectStatus
