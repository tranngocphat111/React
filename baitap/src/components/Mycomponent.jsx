import { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const Mycomponent = (props) => {
  const [listUser, setlistUser] = useState([
    { id: 1, Name: "Dung", Age: 49 },
    { id: 2, Name: "Hoang", Age: 17 },
    { id: 3, Name: "Chien", Age: 32 },
  ]);

  const handleAddnewUser = (userObject) => {
    if (listUser.length < 10) {
      setlistUser([userObject, ...listUser]);
    }
  };
  const handleDeleteUser = (userID) => {
    let listUserClone = listUser;
    listUserClone = listUserClone.filter((item) => item.id !== userID);
    setlistUser(listUserClone);
  };

  return (
    <>
      {listUser.length === 10 && <h2>Da full 10 User</h2>}
      <div>
        <AddUserInfor handleAddnewUser={handleAddnewUser}></AddUserInfor>
        <hr />
        <h2>Hide list user</h2>
        <hr />
        <DisplayInfor
          listUser={listUser}
          handleDeleteUser={handleDeleteUser}
        ></DisplayInfor>
      </div>
    </>
  );
};
export default Mycomponent;
