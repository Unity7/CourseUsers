const AddUser = () => {
  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">UserName</label>
      <input id="username" type="text"></input>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number"></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
