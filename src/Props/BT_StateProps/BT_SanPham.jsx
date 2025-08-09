import React from "react";

const BT_SanPham = (props) => {
  //props.item, props.handleSetStateProduct
  let { item, handleSetStateProduct, themGioHang } = props;
  return (
    <div className="card">
      <img
        src={item.hinhAnh}
        alt="..."
        height={250}
        style={{ objectFit: "contain" }}
      />
      <div className="card-body">
        <h3>{item.tenSP}</h3>
        <p>{item.giaBan}</p>
        <button
          className="btn btn-dark"
          onClick={() => {
            handleSetStateProduct(item);
          }}
        >
          Xem chi tiết
        </button>
        <button
          className="btn btn-outline-dark mx-2"
          onClick={() => {
            //Xử lý tha đổi state giỏ hàng
            // const sanPhamGioHang = {...item,soLuong:1};
            // setGioHang(stateGioHang => {
            //   stateGioHang.push(sanPhamGioHang);
            //   return [...stateGioHang]; //imutable
            // })
            themGioHang(item);
          }}
        >
          Thêm giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default BT_SanPham;
