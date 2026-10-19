import EmployeeComponent from "./components/EmployeeComponent"
import PersonComponent from "./components/PersonComponent"
import type Employee from "./types/Employee"
import type Person from "./types/Person"

function App() {
    const p1: Person = { name: 'anil', age: 32 }
    const emparr: Employee[] = [
        { empid: 1, name: 'anil', salary: 10000 },
        { empid: 2, name: 'mukesh', salary: 20000 },
        { empid: 3, name: 'ramesh', salary: 30000 },
        { empid: 4, name: 'suresh', salary: 40000 }
    ]

    return (
        <div>
            {/* Properties -> (attributes in html) */}
            {/* Properties are the way of passing data from parent 
            component to the child component */}
            <h2>Person Details : </h2>
            <PersonComponent name={p1.name} age={p1.age} />
            <hr />
            <h2>Employee Details : </h2>
            {
                emparr.map(e => <EmployeeComponent empid={e.empid} name={e.name} salary={e.salary} />)
            }

            {/* <EmployeeComponent empid={emparr[0].empid} name={emparr[0].name} salary={emparr[0].salary} />
            <EmployeeComponent empid={emparr[1].empid} name={emparr[1].name} salary={emparr[1].salary} />
            <EmployeeComponent empid={emparr[2].empid} name={emparr[2].name} salary={emparr[2].salary} />
            <EmployeeComponent empid={emparr[3].empid} name={emparr[3].name} salary={emparr[3].salary} /> */}

        </div>
    )
}

export default App
