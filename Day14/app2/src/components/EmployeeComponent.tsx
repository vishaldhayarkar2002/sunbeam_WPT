import type Employee from "../types/Employee"

function EmployeeComponent(emp: Employee) {
    return (
        <div>
            <p>Empid : {emp.empid} </p>
            <p>Name : {emp.name}</p>
            <p>Salary : {emp.salary}</p>
            <hr />
        </div>
    )
}

export default EmployeeComponent
