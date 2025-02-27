import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AddStudent({ onAdd }) {
  const name = useRef();
  const grade = useRef();
  return (
    <Form className="bg-light p-3">
      <h2>Thêm sinh viên</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Họ tên</Form.Label>
        <Form.Control type="text" placeholder="Họ tên" ref={name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Điểm trung bình</Form.Label>
        <Form.Control type="text" placeholder="Điểm trung bình" ref={grade} />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          onAdd({
            id: Math.floor(Math.random() * 1000),
            name: name.current.value,
            grade: grade.current.value,
          });
        }}
      >
        Thêm sinh viên
      </Button>
    </Form>
  );
}
