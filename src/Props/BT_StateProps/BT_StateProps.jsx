import React, { useState } from "react";
import { dataPhone } from "../../data/dataPhone";
import BT_SanPham from "./BT_SanPham";
import BT_GioHang from "./BT_GioHang";
const BT_StateProps = () => {
  const [productDetail, setProductDetail] = useState({
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "/img/applephone.jpg",
  });

  const [gioHang, setGioHang] = useState([
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "/img/applephone.jpg",
      soLuong: 1,
    },
  ]);

  const renderProduct = () => {
    let arrProductJSX = dataPhone.map((item, index) => {
      return (
        <div className="col-md-4 mt-2" key={index}>
          <BT_SanPham
            item={item}
            handleSetStateProduct={handleViewDetail}
            themGioHang={themGioHang}
          />
        </div>
      );
    });
    return arrProductJSX;
  };

  const handleViewDetail = (prodClick) => {
    //Click vào item nào thì set state lại product detail = item đó
    setProductDetail(prodClick);
  };

  const themGioHang = (spClick) => {
    //Tạo ra sản phẩm có số lượng
    const sanPhamGioHang = { ...spClick, soLuong: 1 };
    //Clone giỏ hàng ra vùng nhớ mới
    let gioHangMoi = [...gioHang];
    //Kiểm tra sản phẩm được click có trong giỏ hàng chưa (nếu có thì tăng số lượng, chưa có thì thêm vào)
    let itemGioHang = gioHangMoi.find((sp) => sp.maSP == spClick.maSP);
    if (itemGioHang) {
      //itemGioHang != undefined
      itemGioHang.soLuong += 1;
    } else {
      gioHangMoi.push(sanPhamGioHang);
    }

    //gọi hàm setState đưa vào giỏ hàng mới
    setGioHang(gioHangMoi);
  };

  const xuLyXoaSanPham = (maSP) => {
    console.log("Xoa san pham", maSP);

    // Lọc ra giỏ hàng mới ko có sp có mã sp là maSP
    // let gioHangMoi = gioHang.filter((item)=>{
    //   return item.maSP !== maSP
    // })
    let gioHangMoi = gioHang.filter((item) => item.maSP !== maSP);

    // Cập nhật lại giỏ hàng mới
    setGioHang(gioHangMoi);
    console.log("gioHangMoi", gioHangMoi);
  };

  const giamSoLuong = (maSanPham) => {
    console.log("giamSoLuong", maSanPham);
    // Clone ra giỏ hàng mới
    let gioHangMoi = [...gioHang];

    // Tìm sản phẩm trong giỏ hàng mới có mã sản phẩm trùng với maSanPham
    let sanPham = gioHangMoi.find((item) => item.maSP === maSanPham);

    // TH1: Nếu không tìm thấy sản phẩm thì alert ra thông báo
    if (!maSanPham) {
      alert("Sán phẩm không tồn tại trong giỏ hàng!!!");
      return;
    }
    // TH2: Nếu tìm thấy sản phẩm thì giảm số lượng lên 1

    // kiểm tra nếu số lượng sản phẩm lớn hơn 1 thì mới giảm, nếu = 1 thì ko giảm nữa và xoá sản phẩm ra khỏi giỏ hàng
    if (sanPham.soLuong <= 1) {
      // Xoá sản phẩm ra khỏi giỏ hàng
      // Sử dụng hàm đã viết ở trên để xoá sản phẩm
      xuLyXoaSanPham(sanPham.maSP);
      // Không cần cập nhật giỏ hàng mới vì đã xoá sản phẩm ra khỏi giỏ hàng
      return;
    }
    sanPham.soLuong -= 1;

    // Cập nhật lại giỏ hàng mới
    setGioHang(gioHangMoi);
  };

  const tangSoLuong = (maSanPham) => {
    console.log("tangSoLuong", maSanPham);
    let gioHangMoi = [...gioHang]; // Clone ra giỏ hàng mới
    let sanPham = gioHangMoi.find((item) => {
      return item.maSP === maSanPham;
    }); // Tìm sản phẩm trong giỏ hàng mới có mã sản phẩm trùng với maSanPham

    // TH1: Nếu không tìm thấy sản phẩm thì alert ra thông báo
    if (!maSanPham) {
      alert("Sán phẩm không tồn tại trong giỏ hàng!!!");
      return;
    }

    // TH2: Nếu tìm thấy sản phẩm thì tăng số lượng lên 1
    sanPham.soLuong += 1;

    // Cập nhật lại giỏ hàng mới
    setGioHang(gioHangMoi);

    // console.log("sanPham tìm được", sanPham);
  };
  return (
    <div className="container">
      <h3>Bài tập state props</h3>
      <BT_GioHang
        gioHang={gioHang}
        xoaSanPham={xuLyXoaSanPham}
        tangSoLuong={tangSoLuong}
        giamSoLuong={giamSoLuong}
      />
      <div className="row">
        {renderProduct()}
        <div className="mt-2 row">
          <div className="col-3">
            <h3>Tên sản phẩm chi tiết</h3>
            <img
              src={productDetail.hinhAnh}
              height={250}
              style={{ objectFit: "contain" }}
              alt="..."
            />
          </div>
          <div className="col-9">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <th>{productDetail.manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <th>{productDetail.heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <th>{productDetail.cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{productDetail.cameraSau}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{productDetail.ram}</th>
                </tr>
                <tr>
                  <th>Rom</th>
                  <th>{productDetail.rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BT_StateProps;
