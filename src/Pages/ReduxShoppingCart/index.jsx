import React from "react";
import { Typography, Table } from "antd";
import { useSelector } from "react-redux";

const ReduxShoppingCartPage = () => {
  const { carts } = useSelector((state) => state.product);

  const columns = [
    {
      title: "Mã sản phẩm",
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
      render: (value) => (
        <img src={value} style={{ width: "40px", height: "40px" }} />
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "shortDescription",
      index: "shortDescription",
      render: (value) => (
        <Typography ellipsis style={{ width: "250px" }}>
          {value}
        </Typography>
      ),
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      index: "price",
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
  return (
    <div className="container mt5`">
      <Typography.Title>
        Sản phẩm trong giỏ hàng({carts.length})
      </Typography.Title>

      {/* Table antd */}
      <Table
        columns={columns}
        dataSource={carts}
        onRow={(record) => {
          return {
            onClick: () => {
              console.log("Row clicked:", record);
            },
          };
        }}
      />
    </div>
  );
};

export default ReduxShoppingCartPage;
