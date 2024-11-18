import { Alert } from 'antd'

interface EmployeeListErrorProps {
  errorMessage: string
}

const EmployeeListError = ({ errorMessage }: EmployeeListErrorProps) => {
  return (
    <Alert message="Error" description={errorMessage} type="error" showIcon />
  )
}

export default EmployeeListError
