import { useEffect, useMemo, useReducer, useState } from "react";
import AddStudent from "./components/AddStudent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TableStudent from "./components/TableStudent";

function App() {
  const storedData = JSON.parse(localStorage.getItem("student")) || [];
  const [data, dispatch] = useReducer(handleChangeReducer, storedData);

  const [isUpdateStudent, setIsUpdateStudent] = useState(false);
  const [studentUpdate, setStudentUpdate] = useState(null);
  const [avgStudent, setAvgStudent] = useState(0);

  useMemo(()=> {
    const avg = data.reduce((sum, student) => sum + parseFloat(student.grade), 0) / data.length;
    setAvgStudent(avg);
  }, [data]);

  useEffect(() => {
    localStorage.setItem("student", JSON.stringify(data));
  }, [data]);

  function handleChangeReducer(state, action) {
    console.log("Current state:", state);
    console.log("Action received:", action);
  
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "DELETE":
        return state.filter((student) => student.id !== action.payload);
      case "UPDATE":
        const updatedState = state.map((student) =>
          student.id === action.payload.id ? action.payload : student
        );
        console.log("Updated state:", updatedState);
        return updatedState;
      default:
        return state;
    }
  }
  

  function handleAddStudent(student) {
    dispatch({ type: "ADD", payload: student });
  }

  function handleDelete(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function IsUpdateStudent(student) {
    setIsUpdateStudent(true);
    setStudentUpdate(student);
  }

  function handleUpdate(student) {
    dispatch({ type: "UPDATE", payload: student });
    setIsUpdateStudent(false);
    setStudentUpdate(null);
  }

  return (
    <>
      <AddStudent onAdd={handleAddStudent} isUpdate={isUpdateStudent} onUpdate={handleUpdate} studentUpdate={studentUpdate}/>
      <TableStudent avgStudent={avgStudent} onOpenFormUpdate={IsUpdateStudent} onDelete={handleDelete} data={data} />
    </>
  );
}

export default App;
