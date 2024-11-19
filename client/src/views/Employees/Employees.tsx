import { Flex } from 'antd'
import { parseAsString, useQueryState } from 'nuqs'
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
  const [search, setSearchValue] = useQueryState('search', parseAsString)

  const filterEmployeesBySearch = (
    employees: Employee[],
    searchValue: string
  ): Employee[] => {
    const trimmedSearch = searchValue.toLowerCase().trim()
    return employees.filter((employee) =>
      employee.name.toLowerCase().includes(trimmedSearch)
    )
  }

  const filterEmployeesByStatus = (
    employees: Employee[],
    status?: string
  ): Employee[] => {
    if (!status) return employees
    return employees.filter((employee) => employee.status === status)
  }

  useEffect(() => {
    if (data) {
      const filteredData = filterEmployeesBySearch(data, search || '')
      setEmployeesData(filteredData)
    }
  }, [data, search])

  const handleSearch = (value: string) => {
    const trimmedValue = value.trim()
    if (trimmedValue) {
      setSearchValue(trimmedValue)
    } else {
      setSearchValue(null)
    }
  }

  const handleFilterByStatus = (status?: string) => {
    if (data) {
      const filteredData = filterEmployeesByStatus(data, status)
      setEmployeesData(filteredData)
    }
  }

  const renderContent = () => {
    if (isLoading) return <EmployeeListSkeleton />
    if (isError) return <EmployeeListError errorMessage={error.message} />
    return <EmployeesList employees={employeesData} />
  }

  return (
    <StyledContainer>
      <Flex gap={4}>
        <CreateNewUser />
        <Filter
          searchValue={search || ''}
          handleSearch={handleSearch}
          handleFilterByStatus={handleFilterByStatus}
        />
      </Flex>
      {renderContent()}
    </StyledContainer>
  )
}

export default Employees
