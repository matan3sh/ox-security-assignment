import { Flex } from 'antd'
import { parseAsString, useQueryState } from 'nuqs'
import { useEffect, useState } from 'react'
import CreateNewUser from '../../components/CreateNewUser/CreateNewUser'
import { Employee } from '../../components/EmployeeList/EmployeeList.config'
import EmployeeListError from '../../components/EmployeeList/EmployeeListError'
import EmployeeListSkeleton from '../../components/EmployeeList/EmployeeListSkeleton'
import EmployeesList from '../../components/EmployeeList/EmployeesList'
import Filter from '../../components/Filter/Filter'
import { EmpoyeeStatus } from '../../components/SelectStatus/SelectStatus.config'
import { useGetEmployees } from '../../hooks/useGetEmployees'
import { StyledContainer } from './Employees.styled'
import { applyFilters } from './Employees.utils'

const Employees = () => {
  const { data, isLoading, isError, error } = useGetEmployees()
  const [employeesData, setEmployeesData] = useState<Employee[]>([])
  const [search, setSearchValue] = useQueryState('search', parseAsString)
  const [statusFilter, setStatusFilter] = useQueryState('status', parseAsString)

  useEffect(() => {
    if (data) {
      const filteredData = applyFilters(
        data,
        search || '',
        statusFilter || undefined
      )
      setEmployeesData(filteredData)
    }
  }, [data, search, statusFilter])

  const handleSearch = (value: string) => {
    const trimmedValue = value.trim()
    if (trimmedValue) {
      setSearchValue(trimmedValue)
    } else {
      setSearchValue(null)
    }
  }

  const handleFilterByStatus = (status?: string) => {
    if (status) {
      setStatusFilter(status)
    } else {
      setStatusFilter(null)
    }
  }

  const renderContent = () => {
    if (isLoading) return <EmployeeListSkeleton />
    if (isError) return <EmployeeListError errorMessage={error.message} />
    if (employeesData.length === 0) return <h3>No employees found.</h3>
    return <EmployeesList employees={employeesData} />
  }

  return (
    <StyledContainer>
      <Flex gap={4}>
        <CreateNewUser />
        <Filter
          statusFilter={statusFilter as EmpoyeeStatus}
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
