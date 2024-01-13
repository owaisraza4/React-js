// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './Components/FormSecton';
import TableSection from "./Components/TableSection";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="display-5 text-center py-2">Crud Opertion with Todo App</h1>
              <hr />
     <Form/>
    </>
  )
}

export default App
