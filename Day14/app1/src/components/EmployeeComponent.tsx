import type Employee from "../types/Employee"

function EmployeeComponent() {
    const e1: Employee = {
        empid: 1,
        name: 'mukesh',
        salary: 10000
    }

    return <>
        <p>Empid - {e1.empid}</p>
        <p>Name - {e1.name}</p>
        <p>Salary - {e1.salary}</p>
    </>
}

export default EmployeeComponent
