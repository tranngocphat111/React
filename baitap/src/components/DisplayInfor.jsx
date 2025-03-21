function DisplayInfor({ listUser, handleDeleteUser }) {
  if (listUser.length === 0) {
  }
  return (
    <>
      {" "}
      {listUser.length === 0 && <h1>Da xoa het user</h1>}
      <div>
        {listUser.map((user) => {
          return (
            <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
              <div>My name is: {user.Name}</div>
              <div>My Age: {user.Age}</div>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DisplayInfor;
