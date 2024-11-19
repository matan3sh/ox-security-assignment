import { Employee } from '../../components/EmployeeList/EmployeeList.config'

export const applyFilters = (
  employees: Employee[],
  searchValue: string,
  status?: string
): Employee[] => {
  let filteredData = employees

  if (searchValue) {
    const trimmedSearch = searchValue.toLowerCase().trim()
    filteredData = filteredData.filter((employee) =>
      employee.name.toLowerCase().includes(trimmedSearch)
    )
  }

  if (status) {
    filteredData = filteredData.filter((employee) => employee.status === status)
  }

  return filteredData
}
