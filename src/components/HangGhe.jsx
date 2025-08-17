import React from "react";
import Ghe from "./ghe";

const HangGhe = (props) => {
  const { hang } = props;
  return (
    <tr>
      <td>
        <span className="d-inline-block   " style={{ width: 30, height: 30 }}>
          {hang.hang}
        </span>
      </td>
      {hang?.danhSachGhe?.map((ghe, index) => {
        return <Ghe ghe={ghe} key={index} />;
      })}
    </tr>
  );
};

export default HangGhe;
