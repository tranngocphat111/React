import React from "react";
import Childcomponent from "./Childcomponent";
import DisplayInfor from "./DisplayInfor";
import AddUerInfo from "./AddUserInfor";
class Mycomponent extends React.Component {
  state = {
    listUser: [
      { id: 1, Name: "Dung", Age: 49 },
      { id: 2, Name: "Hoang", Age: 17 },
      { id: 3, Name: "Chien", Age: 32 },
    ],
  };

  handleAddnewUser = (userObject) => {
    this.setState({
        listUser: [userObject, ...this.state.listUser]
    })
  }



  render() {

    return (
      <div>
        <AddUerInfo handleAddnewUser={this.handleAddnewUser}></AddUerInfo>
        <h2>Hide list user</h2>
        <hr />
        <DisplayInfor listUser={this.state.listUser} ></DisplayInfor>
      </div>
    );
  }
}
export default Mycomponent;
