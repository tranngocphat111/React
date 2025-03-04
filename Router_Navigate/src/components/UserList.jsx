import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import { FaMale } from 'react-icons/fa'; 

const users = [
  { id: 1, name: "Nguyễn Văn A" },
  { id: 2, name: "Trần Thị B" },
  { id: 3, name: "Lê Văn C" }
];
function UserList() {
  return (
    <ListGroup className="shadow-lg " >
      {users.map((user) => (
        <ListGroup.Item key={user.id}  className="flex justify-content-around" >
          <FaMale className="ms-2 text-primary" />
          <Link className="text-decoration-none text-black m-4" to={`/user/${user.id}`}>
            {user.name}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
export default UserList; 