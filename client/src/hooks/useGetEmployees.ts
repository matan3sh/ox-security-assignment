import { useQuery } from '@tanstack/react-query'
import { getEmployees } from '../utils/employee'

export const useGetEmployees = () => {
  return useQuery({
    queryKey: ['emplyees'],
    queryFn: getEmployees,
  })
}
