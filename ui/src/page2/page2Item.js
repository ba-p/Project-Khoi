import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

export const Page2Item = (props) => {
    const { item } = props;
  return (
    <tr>
      <td>
        <div className="table-row">
          <div className="bg3 row-box" style={{ width: "100%" }}>{item.tenMon}</div>
        </div>
      </td>

      <td>
        <div className="table-row">
          <BiMinus size={30} />
          <div className="bg3 row-box">0</div>
          <BiPlus size={30} />
        </div>
      </td>

      <td>
        <div className="table-row">
          <div className="bg3 row-box" style={{ width: "100%" }}>{item.gia}</div>
        </div>
      </td>
    </tr>
  );
};
