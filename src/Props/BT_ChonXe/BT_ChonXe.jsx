import React, { useState } from "react";
import BT_Modal from "./BT_Modal";
import BT_DanhSachSanPham from "./BT_DanhSachSanPham";

const BT_ChonXe = () => {
  const [stateModal, setStateModal] = useState({
    id: 1,
    name: "black car",
    img: "/img/products/black-car.jpg",
    price: 1000,
  });
  return (
    <div className="container">
      <h3>Bài tập chọn xe</h3>
      <BT_Modal dataModal={stateModal} />
      <BT_DanhSachSanPham setStateModal={setStateModal} />
    </div>
  );
};

export default BT_ChonXe;
