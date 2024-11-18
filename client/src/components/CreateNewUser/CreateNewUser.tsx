import { PlusOutlined } from '@ant-design/icons'
import { useState } from 'react'
import UserModal from '../UserModal/UserModal'
import { StyledButton } from './CreateNewUser.styled'

const CreateNewUser = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledButton
        onClick={() => setOpen(true)}
        type="primary"
        icon={<PlusOutlined />}
        iconPosition={'end'}
      >
        Create
      </StyledButton>
      <UserModal open={open} setOpen={setOpen} />
    </>
  )
}

export default CreateNewUser
