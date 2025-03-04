import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AddStudent({ onAdd ,isUpdate, onUpdate,studentUpdate }) {
  const name = useRef();
  const grade = useRef();
  if (studentUpdate) {
    name.current.value = studentUpdate.name;
    grade.current.value = studentUpdate.grade;
  }
  
  function validateInput(name, grade) {
    const nameRegex = /^[A-Za-zÀ-ỹ\s]+$/; 
    
    if (!name.trim()) {
      return { isValid: false, message: "Tên không được để trống" };
    }
    if (!nameRegex.test(name)) {
      return { isValid: false, message: "Tên chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt" };
    }
    
    if (grade.trim() === "") {
      return { isValid: false, message: "Điểm không được để trống" };
    }
    
    const gradeValue = Number(grade);
    if (isNaN(gradeValue) || gradeValue < 0 || gradeValue > 10) {
      return { isValid: false, message: "Điểm phải là số từ 0 đến 10" };
    }
  
    return { isValid: true };
  }


  function handleSubmitAdd(event){
    event.preventDefault();
      if(!validateInput(name.current.value, grade.current.value).isValid){
        alert(validateInput(name.current.value, grade.current.value).message);
        return;
      }

      onAdd({
        id: Math.floor(Math.random() * 1000),
        name: name.current.value,
        grade: grade.current.value,
      });

      name.current.value = "";
      grade.current.value = "";
  }

  function handleSubmitUpdate(event){
    event.preventDefault();
    onUpdate({
      id: studentUpdate.id,
      name: name.current.value,
      grade: grade.current.value,
    });

    name.current.value = "";
    grade.current.value = "";
    
}
  
  return (
    <>
      <h1>Quản lý sinh viên</h1>
      <Form className="bg-light p-3" onSubmit={isUpdate ? handleSubmitUpdate : handleSubmitAdd}>
      <h2>{isUpdate ? "Chỉnh sửa sinh viên" : "Thêm sinh viên"}</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Họ tên</Form.Label>
          <Form.Control type="text" placeholder="Họ tên" ref={name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Điểm trung bình</Form.Label>
          <Form.Control type="text" placeholder="Điểm trung bình" ref={grade}/>
        </Form.Group>

        


        <Button variant="primary" type="submit" >
          {isUpdate ? "Chỉnh sửa" : "Thêm sinh viên"}
        </Button>
      </Form>
    </>
  );
}
