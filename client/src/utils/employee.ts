import axios from 'axios'
import { Employee } from '../components/EmployeeList/EmployeeList.config'
import { EmpoyeeStatus } from '../components/SelectStatus/SelectStatus.config'

const BASE_URL = 'http://localhost:8000'

export const getEmployees = async () => {
  const response = await axios.get(`${BASE_URL}/users`)
  return response.data as Employee[]
}

export const updateEmployeeStatus = async ({
  userId,
  status,
}: {
  userId: number
  status: EmpoyeeStatus
}) => {
  const response = await axios.post(`${BASE_URL}/users/${userId}`, {
    status,
  })
  return response.data as Employee[]
}
