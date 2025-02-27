import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddStudent from './components/AddStudent'
import 'bootstrap/dist/css/bootstrap.min.css';
import TableStudent from './components/TableStudent'
function App() {

  let data = [{
    id: 1,
    name: 'John Doe',
    grade: 8.5
  },
  {
    id: 2,
    name: 'Jane Doe',
    grade: 8.5
  }]

  const [students, setStudents] = useState(data);

  function handleAddStudent(student) {
    setStudents([...students, student]);
  }



  return (
    <>
      <h1 >Quản lý sinh viên</h1>
      <AddStudent onAdd={handleAddStudent}/>


      <div>
        <h2>Danh sách sinh viên</h2>
        <TableStudent data={students} />
      </div>

    </>
  )
}

export default App
