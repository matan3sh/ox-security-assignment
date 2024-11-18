import { Flex, Input, Modal } from 'antd'
import { useState } from 'react'
import SelectStatus from '../SelectStatus/SelectStatus'
import { EmpoyeeStatus } from '../SelectStatus/SelectStatus.config'
import { StyledErrorText, StyledLabel } from './UserModal.styled'

interface UserModalProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const UserModal = ({ open, setOpen }: UserModalProps) => {
  const [employeeName, setEmployeeName] = useState<string>('')
  const [emplyeeStatus, setEmplyeeStatus] = useState<
    EmpoyeeStatus | undefined
  >()
  const [invalidInput, setInvalidInput] = useState<boolean>(false)

  const handleChangeEmployeeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^[a-zA-Z]*$/.test(value)) {
      setInvalidInput(false)
      setEmployeeName(value)
      return
    }
    setInvalidInput(true)
  }

  return (
    <Modal
      title="Create New User"
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      closeIcon={false}
      keyboard
      styles={{
        header: { borderBottom: '1px solid #eee', padding: '12px 0' },
        footer: {
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '8px',
          marginInlineStart: '0',
          marginTop: '30px',
        },
      }}
      okButtonProps={{ style: { order: 1 } }}
      cancelButtonProps={{ style: { order: 2 } }}
      okText="Create"
      cancelText="Cancel"
    >
      <Flex vertical gap={20}>
        <Flex vertical>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <Flex vertical gap={2}>
            <Input
              value={employeeName}
              onChange={handleChangeEmployeeName}
              status={invalidInput ? 'error' : undefined}
            />
            {invalidInput && (
              <StyledErrorText>
                Only English alphabetical characters allowed
              </StyledErrorText>
            )}
          </Flex>
        </Flex>
        <Flex vertical>
          <StyledLabel htmlFor="status">Status</StyledLabel>
          <SelectStatus
            onChange={(newStatus) => setEmplyeeStatus(newStatus)}
            value={emplyeeStatus}
          />
        </Flex>
      </Flex>
    </Modal>
  )
}

export default UserModal
