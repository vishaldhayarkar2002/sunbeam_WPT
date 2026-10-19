import { createRoot } from 'react-dom/client'
import './index.css'

interface Person {
  name: string
  age: number
  mobile: string
}

const p1: Person = {
  name: 'anil',
  age: 30,
  mobile: '9876543210'
}

const personDetails = <>
  <p>Name : {p1.name} </p>
  <p>Age : {p1.age} </p>
  <p>Mobile : {p1.mobile}</p>
</>

interface Employee {
  empid: number
  name: string
  salary: number
}

const e1: Employee = {
  empid: 1,
  name: 'mukesh',
  salary: 10000
}

const employeeDetails = <>
  <p>Empid - {e1.empid}</p>
  <p>Name - {e1.name}</p>
  <p>Salary - {e1.salary}</p>
</>

createRoot(document.getElementById('root')!).render([personDetails, <hr />, employeeDetails])
