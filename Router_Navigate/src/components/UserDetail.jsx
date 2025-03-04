import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
const users = [
  { id: 1, name: "Nguyễn Văn A", age: 25, email: "a@example.com" },
  { id: 2, name: "Trần Thị B", age: 30, email: "b@example.com" },
  { id: 3, name: "Lê Văn C", age: 28, email: "c@example.com" }
];
function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    return <h2>Người dùng không tồn tại</h2>;
  }
  return (
    <Container className="mt-5 w-75 shadow-lg">
      <Row className="justify-content-center">
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title className="text-center text-primary">{user.name}</Card.Title>
            <Card.Text>
              <strong>Tuổi:</strong> {user.age}
            </Card.Text>
            <Card.Text>
              <strong>Email:</strong> {user.email}
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
export default UserDetail;