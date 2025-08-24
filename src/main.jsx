import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import css
import "../src/index.css";
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

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomeIndex from "./Pages/HomeIndex";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import HomeTemplate from "./Templates/HomeTemplate";
import DemoUseNavigate from "./Pages/ReactRouterDom/DemoUseNavigate";
import ForGotPass from "./Pages/ReactRouterDom/ForGotPass";
import DemoUseParam from "./Pages/ReactRouterDom/DemoUseParam";
import HeaderHome from "./Templates/HeaderHome";
import DemoUseSearchParam from "./Pages/ReactRouterDom/DemoUseSearchParam";
import AntdDemo from "./Pages/AntdDemo/AntdDemo";

import ChangeNumberRedux from "./Pages/ReduxDemo/ChangeNumberRedux";
import ReduxProductsPage from "./Pages/ReduxProducts";
import ReduxShoppingCartPage from "./Pages/ReduxShoppingCart";
import BookingTicketPage from "./Pages/ReduxDemo/BookingTicketPage";

//setup redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
import DemoGetApiThunk from "./ReduxMiddleWare/DemoGetApiThunk";
import AdminTemplate from "./Templates/AdminTemplate";
import ProductManagement from "./Pages/Admin/ProductManagement";
import ProductEdit from "./Pages/Admin/ProductEdit";
import StoreManagement from "./Pages/Admin/StoreManagement";
import DemoUseMemo from "./Pages/HookToiUu/DemoUseMemo/DemoUseMemo";
import DemoUseCallBack from "./Pages/HookToiUu/DemoUseCallBack/DemoUseCallBack";
import DemoUseRef from "./Pages/HookToiUu/DemoUseRef/DemoUseRef";
import DemoCustomHook from "./Pages/CustomHook/DemoCustomHook";
import LoginAuth from "./Pages/Auth/LoginAuth";
import RegisterAuth from "./Pages/Auth/RegisterAuth";
/*
  Phân biệt state và props:
  state: giá trị thay đổi dùng để binding lên giao diện, state có thể gán lại giá trị (setState)
  props: giá trị có thể  thay đổi dùng để binding lên giao diện, props ko thể gán lại giá trị (readonly)
*/

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <>
  //     {/* <BT1_HomeComponent></BT1_HomeComponent> */}
  //     {/* <DataBinding/> */}
  //     {/* <HandleEvent/> */}
  //     {/* <RenderCondition/> */}
  //     {/* <DemoState/> */}
  //     {/* <DemoChangeNumber/> */}
  //     {/* <DemoChangeColor/> */}
  //     {/* <DemoTinker/> */}
  //     {/* <DemoStyle/> */}
  //     {/* <DemoProps/> */}
  //     {/* <BT_ProductList/> */}
  //     {/* <BT_StateProps/> */}
  //     {/* <BT_ChonXe/> */}
  //     {/* <BT_MonAn/> */}
  //     {/* <ProductsPage/> */}
  //     {/* <ToDoListApi/> */}
  //     {/* <DemoFormLogin/> */}
  //     {/* <DemoFormIk/> */}
  //   </>
  // </StrictMode>
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<HomeIndex />}></Route>
            <Route path="login" element={<LoginAuth />}></Route>
            <Route path="register" element={<RegisterAuth />}></Route>
            <Route path="antd" element={<AntdDemo />}></Route>
            <Route
              path="redux-change-number"
              element={<ChangeNumberRedux />}
            ></Route>
            <Route
              path="redux-products"
              element={<ReduxProductsPage />}
            ></Route>
            <Route
              path="redux-shopping-cart"
              element={<ReduxShoppingCartPage />}
            ></Route>
            <Route
              path="booking-ticket"
              element={<BookingTicketPage />}
            ></Route>
            <Route
              path="redux-thunk-demo"
              element={<DemoGetApiThunk />}
            ></Route>
            <Route
              path="demo-use-memo"
              element={<DemoUseMemo/>}
            ></Route>
            <Route
              path="demo-use-callback"
              element={<DemoUseCallBack/>}
            ></Route>
            <Route
              path="demo-use-ref"
              element={<DemoUseRef/>}
            ></Route>
            <Route
              path="demo-custom-hook"
              element={<DemoCustomHook/>}
            ></Route>
          </Route>

          <Route
            path="api"
            element={
              <div>
                <header className="bg-dark text-white p-3">Header</header>
                <Outlet />
                <footer className="bg-dark text-white p-3">Footer</footer>
              </div>
            }
          >
            <Route path="todolist" element={<ToDoListApi />} />
            <Route path="productspage" element={<ProductsPage />} />
          </Route>

          <Route path="react-router-dom" element={<HomeTemplate />}>
            <Route
              path="demo-use-navigate"
              element={<DemoUseNavigate />}
            ></Route>
            <Route path="for-got-pass" element={<ForGotPass />}></Route>
            <Route
              path="use-search-param"
              element={<DemoUseSearchParam />}
            ></Route>
          </Route>

          <Route path="demo-use-param">
            <Route
              path=":id"
              element={
                <div>
                  <HeaderHome />
                  <DemoUseParam />
                </div>
              }
            ></Route>
          </Route>

          <Route path="admin" element={<AdminTemplate />}>
            <Route
              path="product-management"
              element={<ProductManagement />}
            ></Route>
            <Route path="product-edit/:id" element={<ProductEdit />}></Route>
          </Route>
          <Route path='store-management' element={<StoreManagement />} ></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </>
);
