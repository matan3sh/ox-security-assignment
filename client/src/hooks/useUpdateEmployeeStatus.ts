import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateEmployeeStatus } from '../utils/employee'

export const useUpdateEmployeeStatus = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateEmployeeStatus,
    onSuccess: (data) => {
      queryClient.setQueryData(['emplyees', data], data)
      queryClient.invalidateQueries({ queryKey: ['emplyees'], exact: true })
    },
  })
}
