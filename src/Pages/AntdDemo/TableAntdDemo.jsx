import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Item from "antd/es/list/Item";
import { NavLink } from "react-router-dom";

const TableAntdDemo = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const dataColumns = [
    {
      title: "id",
      dataIndex: "id", //dataIndex phải đặt đúng theo api thì mới trả được kết quả
      index: "id",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      index: "name",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      index: "image",
      render: (value, item) => {
        // console.log("item", item);
        // console.log("value", value);
        return (
          <NavLink to={`/demo-use-param/${item.id}`}>
            <img src={value} alt={item.alias} width={100} height={100} />
          </NavLink>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      index: "action",
      render: (value, item) => {
        return (
          <div>
            <button
              className="btn btn-primary"
              onClick={() => {
                console.log(item.id, "edit");
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                console.log(item.id, "delete");
              }}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  console.log(arrProduct);
  //call api lấy danh sách giày -> hiển thị ra table của antd
  const getAllProductApi = async () => {
    try {
      const res = await axios({
        url: `https://apistore.cybersoft.edu.vn/api/Product`,
        method: "GET",
      });
      setArrProduct(res.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllProductApi(); //Gọi api đưa vào state
  }, []);
  return (
    <div>
      <Table columns={dataColumns} dataSource={arrProduct} />
    </div>
  );
};

export default TableAntdDemo;
