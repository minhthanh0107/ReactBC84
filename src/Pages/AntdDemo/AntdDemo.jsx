import React, { useState } from "react";
import { Rate } from "antd";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import moment from "moment";
import TableAntdDemo from "./TableAntdDemo";
import TableExtend from "./TableExtend";

const { RangePicker } = DatePicker;

const AntdDemo = () => {
  //   const [clear, setClear] = useState(false);
  //   const dayjs = require("dayjs");

  return (
    <div className="container">
      <h3>Antd - demo</h3>
      <Rate allowHalf defaultValue={2.5} />
      <RangePicker
        allowClear={true}
        showTime
        onChange={(date, dateString) => {
          //   let dstart = moment(dateString[0]).format("DD/MM/YYYY hh:mm:ss");

          //   dayjs
          let dstart = date[0].format("DD/MM/YYYY hh:mm:ss");
          console.log(dstart);
        }}
      />
      {/* <button
        className="btn btn-success"
        onClick={(e) => {
          setClear(true);
        }}
      >
        Clear range picker
      </button> */}

      <hr />
        <h3>Demo table antd</h3>
        <TableAntdDemo/>
        <hr />
        <TableExtend/>
    </div>
  );
};

export default AntdDemo;
