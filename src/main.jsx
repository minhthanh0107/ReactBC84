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
// import './index.css'
// import App from './App.jsx'

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
      <DemoProps/>
    </>
  </StrictMode>
);
