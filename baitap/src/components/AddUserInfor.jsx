import React from "react";

class AddUerInfo extends React.Component {
  state = {
    Name: "",
    Age: "",
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); //ngăn việc tải lại trang
    //console.log(this.state)
    this.props.handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + "user",
      Name: this.state.Name,
      Age: this.state.Age,
    });

    this.setState({
      Name: "",
      Age: 0,
    });
  };

  handleOnchangeName = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };

  handleOnchangeAge = (event) => {
    this.setState({
      Age: event.target.value,
    });
  };

  render() {
    return (
      <>
        <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
          <div>
            <span> Your Name:</span>
            <input
              type="text"
              value={this.state.Name} //gán giá trị mặc định
              onChange={event => this.handleOnchangeName(event)}
            />
          </div>

          <div>
            <span> Your Age:</span>
            <input
              type="text"
              value={this.state.Age} //gán giá trị mặc định
              onChange={event => this.handleOnchangeAge(event)}
            />
          </div>
          <button>Submit</button>
        </form>
      </>
    );
  }
}
export default AddUerInfo;
