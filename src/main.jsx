import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import css
import "../src/index.css"
import HeaderReact from "./components/HearderReact";
import CardProduct from "./components/CardProduct";
import BT1_HomeComponent from "./components/BT1_HomeComponent";
import DataBinding from "./databinding/DataBinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import RenderCondition from "./render_condition/RenderCondition";
import DemoState from "./RenderStatement/DemoState";
import DemoChangeNumber from "./RenderStatement/DemoChangeNumber";
import DemoChangeColor from "./RenderStatement/DemoChangeColor";
import DemoTinker from "./RenderStatement/DemoTinker";
import DemoStyle from "./StyleComponent/DemoStyle";
import DemoProps from "./Props/DemoProps";
import BT_ProductList from "./Props/BTProps/BT_ProductList";
import BT_StateProps from "./Props/BT_StateProps/BT_StateProps";
import BT_ChonXe from "./Props/BT_ChonXe/BT_ChonXe";
import BT_MonAn from "./Props/BT_MonAn/BT_MonAn";
import ProductsPage from "./api/ProductsPage";
import ToDoListApi from "./api/ToDoListApi";
import DemoFormLogin from "./Form/DemoFormLogin";
import DemoFormIk from "./Form/DemoFormIk";
// import './index.css'
// import App from './App.jsx'


/*
  Phân biệt state và props:
  state: giá trị thay đổi dùng để binding lên giao diện, state có thể gán lại giá trị (setState)
  props: giá trị có thể  thay đổi dùng để binding lên giao diện, props ko thể gán lại giá trị (readonly)
*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      {/* <BT1_HomeComponent></BT1_HomeComponent> */}
      {/* <DataBinding/> */}
      {/* <HandleEvent/> */}
      {/* <RenderCondition/> */}
      {/* <DemoState/> */}
      {/* <DemoChangeNumber/> */}
      {/* <DemoChangeColor/> */}
      {/* <DemoTinker/> */}
      {/* <DemoStyle/> */}
      {/* <DemoProps/> */}
      {/* <BT_ProductList/> */}
      {/* <BT_StateProps/> */}
      {/* <BT_ChonXe/> */}
      {/* <BT_MonAn/> */}
      {/* <ProductsPage/> */}
      {/* <ToDoListApi/> */}
      {/* <DemoFormLogin/> */}
      <DemoFormIk/>
    </>
  </StrictMode>
);
