import axios from "axios";
import React, { useEffect, useState } from "react";

const ToDoListApi = () => {
  const [arrTask, setArrTask] = useState([]); //state chứa taskList

  const [newTask, setNewTask] = useState("");
  console.log("newTask", newTask);

  const getAllTask = async () => {
    try {
      let res = await axios({
        url: `https://svcy.myclass.vn/api/ToDoList/GetAllTask`,
        method: "GET",
      });
      setArrTask(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderTask = () => {
    let res = arrTask.filter((item) => item.status === false);
    let arrTaskJSX = res.map((item, index) => {
      return (
        <div
          className="alert alert-dark bg-dark text-white d-flex justify-content-between my-1"
          key={index}
        >
          <span>{item.taskName}</span>
          <div className="button-action">
            <button
              className="btn btn-success"
              onClick={() => {
                handleDoneTask(item.taskName);
              }}
            >
              Complete
            </button>
            <button
              className="ms-2 btn btn-danger"
              onClick={() => {
                handleDelTask(item.taskName);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
    return arrTaskJSX;
  };

  const renderTaskComplete = () => {
    let res = arrTask.filter((item) => item.status === true);
    let arrTaskJSX = res.map((item, index) => {
      return (
        <div
          className="alert alert-dark bg-success text-white d-flex justify-content-between"
          key={index}
        >
          <span style={{ textDecoration: "line-through" }}>
            {item.taskName}
          </span>
          <div className="button-action">
            <button
              className="btn btn-warning"
              onClick={() => {
                handleRejectTask(item.taskName);
              }}
            >
              Reject
            </button>
            <button
              className="ms-2 btn btn-danger"
              onClick={() => {
                handleDelTask(item.taskName);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
    return arrTaskJSX;
  };

  const addTask = async () => {
    // Gọi api addTask từ BE
    let obTask = {
      taskName: newTask,
    };
    try {
      let res = await axios({
        url: `https://svcy.myclass.vn/api/ToDoList/AddTask`,
        method: "POST",
        data: obTask,
      });
      // call lại nghiệp vụ load task
      getAllTask();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDoneTask = async (taskNameComplete) => {
    try {
      const res = await axios({
        url: `https://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskNameComplete}`,
        method: "PUT",
      });
      getAllTask();
    } catch (err) {
      console.log(err);
    }
  };

  const handleRejectTask = async (taskNameReject) => {
    try {
      const res = await axios({
        url: `https://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskNameReject}`,
        method: "PUT",
      });
      getAllTask();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelTask = async (taskNameDel) => {
    try {
      const res = await axios({
        url: `https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskNameDel}`,
        method: "DELETE",
      });
      getAllTask();
    } catch (err) {
      console.log(err);
    }
  };
  let loadTask;
  //Gọi 1 lần sau khi giao diện html render
  useEffect(() => {
    //Gọi 1 lần sau khi giao diện html render
    getAllTask();
    //setup sau mỗi 5s hàm callback trong setInterval sẽ gọi lại 1 lần
    loadTask = setInterval(() => {
      getAllTask();
      console.log(123);
    }, 3000);

    return () => {
      clearInterval(loadTask);
    };
  }, []);
  return (
    <div className="container">
      <h3>To do list</h3>
      <div className="input-group">
        <input
          className="form-control"
          id="task"
          name="task"
          placeholder="Nhập vào việc cần làm hôm nay !"
          onInput={(e) => {
            let { value } = e.target;
            // let value = e.target.value;
            setNewTask(value);
          }}
        />
        <button
          className="btn btn-dark"
          onClick={() => {
            addTask();
          }}
        >
          Add
        </button>
      </div>

      <div className="form-group">
        <h3>Các công việc chưa làm</h3>

        {renderTask()}

        {/* {arrTask
          .filter((item) => item.status === false)
          .map((item, index) => (
            <div
              className="alert alert-dark bg-dark text-white d-flex justify-content-between"
              key={index}
            >
              <span>{item.taskName}</span>
              <div className="button-action">
                <button className="btn btn-warning">Reject</button>
                <button className="ms-2 btn btn-danger">Delete</button>
              </div>
            </div>
          ))} */}
      </div>
      <div className="form-group">
        <h3>Các công việc đã làm</h3>

        {renderTaskComplete()}

        {/* {arrTask
          .filter((item) => item.status === true)
          .map((item, index) => (
            <div
              className="alert alert-dark bg-success text-white d-flex justify-content-between"
              key={index}
            >
              <span style={{ textDecoration: "line-through" }}>
                {item.taskName}
              </span>
              <div className="button-action">
                <button className="btn btn-warning">Reject</button>
                <button className="ms-2 btn btn-danger">Delete</button>
              </div>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default ToDoListApi;
