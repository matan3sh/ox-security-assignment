import { Flex } from 'antd'
import { useEffect, useState } from 'react'
import CreateNewUser from '../../components/CreateNewUser/CreateNewUser'
import { Employee } from '../../components/EmployeeList/EmployeeList.config'
import EmployeeListError from '../../components/EmployeeList/EmployeeListError'
import EmployeeListSkeleton from '../../components/EmployeeList/EmployeeListSkeleton'
import EmployeesList from '../../components/EmployeeList/EmployeesList'
import Filter from '../../components/Filter/Filter'
import { useGetEmployees } from '../../hooks/useGetEmployees'
import { StyledContainer } from './Employees.styled'

const Employees = () => {
  const { data, isLoading, isError, error } = useGetEmployees()
  const [employeesData, setEmployeesData] = useState<Employee[]>([])

  useEffect(() => {
    if (data) {
      setEmployeesData(data)
    }
  }, [data])

  const handleSearch = (value: string) => {
    const searchValue = value.toLowerCase().trim()
    const filteredData = data?.filter((employee) => {
      return employee.name.toLowerCase().includes(searchValue)
    })
    setEmployeesData(filteredData ?? [])
  }

  const handleFilterByStatus = (status?: string) => {
    if (!status) {
      setEmployeesData([...(data ?? [])])
      return
    }
    const filteredData = data?.filter((employee) => employee.status === status)
    setEmployeesData(filteredData ?? [])
  }

  return (
    <StyledContainer>
      <Flex gap={4}>
        <CreateNewUser />
        <Filter
          handleSearch={handleSearch}
          handleFilterByStatus={handleFilterByStatus}
        />
      </Flex>
      {isLoading ? (
        <EmployeeListSkeleton />
      ) : isError ? (
        <EmployeeListError errorMessage={error.message} />
      ) : (
        <EmployeesList employees={employeesData} />
      )}
    </StyledContainer>
  )
}

export default Employees
