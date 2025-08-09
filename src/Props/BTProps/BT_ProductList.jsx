import React from "react";
import { dataProduct } from "../../data/dataProduct";
import BT_ProductItem from "./BT_ProductItem";
const BT_ProductList = () => {
  const renderProduct = () => {
    let arrJSX = [];
    for (let item of dataProduct) {
      let divProductItem = (
        <div className="col-md-4 mt-2" key={item.id}>
          <BT_ProductItem dataItem={item} />
        </div>
      );
      // Thêm thẻ jsx và arrJSX
      arrJSX.push(divProductItem);
    }
    return arrJSX; //[<div1>,<div2>,<div3>]
  };
  return (
    <div className="container">
      <h3>Bài tập product list</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
};

export default BT_ProductList;
