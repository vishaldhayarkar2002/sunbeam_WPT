import { createRoot } from 'react-dom/client'
import './index.css'
import PersonComponent from './components/PersonComponent'
import EmployeeComponent from './components/EmployeeComponent'

createRoot(document.getElementById('root')!).render([
  <PersonComponent />,
  <hr></hr>,
  <EmployeeComponent />]
)
