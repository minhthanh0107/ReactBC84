import React, { useState } from "react";

const DemoFormLogin = () => {
  //userLogin = {username:'', password:''}

  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [valid, setValid] = useState(true);
  console.log(userLogin,valid);

  const handleChangeInput = (e) => {
    // Xử lý value
    let { id, value } = e.target; //Bóc tách phần tử từ input
    let newUserLogin = {
      ...userLogin,
      [id]: value,
    }; //Tại sao phải clone lại giá trị cũ? Vì cần giữ lại các giá trị trc đó

    // Xử lý error
    let newError = {
      ...error,
    };

    if (value.trim() === "") {
      // trim(): loại bỏ khoảng trống đầu và cuối của chuỗi
      newError[id] = `${id} cannot be blank!`;
    } else {
      newError[id] = "";
      //   Nếu không bỏ trống thì check tiếp regular expression
      switch (id) {
        case "email":
          {
            const emailRegex =
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(value)) {
              newError[id] = `${id} in invalid!`;
            }
          }
          break;
        case "password":
          {
            const passwordRegex =
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[\s\S]{8,32}$/;
            if (!passwordRegex.test(value)) {
              newError[
                id
              ] = `Password must be 8–32 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.`;
            }
          }
          break;
      }
    }

    // Sau khi xử lý cả username và error mới cho function render lại
    setUserLogin(newUserLogin);
    setError(newError);
    // Xử ký valid form
    checkValidForm(newUserLogin, newError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid) {
      //Check nếu cờ valid = false thì ko cho submit
      return;
    }
    console.log("submit");
  };

  const checkValidForm = (newUserLogin, newError) => {
    // check value tất cả phải khác rỗng
    for (let key in newUserLogin) {
      if (newUserLogin[key].trim() == "") {
        setValid(false);
        return;
      }
    }
    for (let key in newError) {
      if (newError[key] !== "") {
        setValid(false);
        return;
      }
    }
    console.log('valid');
    // Nếu ko rơi bất kỳ return nào thì form hợp lệ
    setValid(true);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="w-50 mx-auto">
        <h3>Login</h3>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            onChange={handleChangeInput}
          />
          <p className="text text-danger">{error.username}</p>
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            onChange={handleChangeInput}
          />
          <p className="text text-danger">{error.email}</p>
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            onChange={handleChangeInput}
          />
          <p className="text text-danger">{error.password}</p>
        </div>
        <div className="form-group mt-3">
          <button className="btn btn-success" disabled={!valid}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default DemoFormLogin;
