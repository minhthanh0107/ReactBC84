import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HeaderReact from "./components/HearderReact";
import CardProduct from "./components/CardProduct";
import BT1_HomeComponent from "./components/BT1_HomeComponent";
import DataBinding from "./databinding/DataBinding";
import HandleEvent from "./HandleEvent/HandleEvent";
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      {/* <BT1_HomeComponent></BT1_HomeComponent> */}
      {/* <DataBinding/> */}
      <HandleEvent/>
    </>
  </StrictMode>
);
