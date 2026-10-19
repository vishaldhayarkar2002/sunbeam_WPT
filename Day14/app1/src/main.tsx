import { createRoot } from 'react-dom/client'
import './index.css'

const ui = <>
  <h1>This is a header</h1>
  <div>
    <p>This is para1</p>
    <p>This is para2</p>
  </div>
</>

createRoot(document.getElementById('root')!).render(ui)
