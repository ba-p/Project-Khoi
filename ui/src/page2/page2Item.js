import React, { useEffect } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

export const Page2Item = (props) => {
  const { item, handlePrice, setAmount } = props;

  useEffect(() => {
    handlePrice(parseInt(item.gia) * item.amount);
  }, [item.amount]);

  return (
    <tr>
      <td style={{ paddingBottom: "20px" }}>
        <div className="table-row">
          <div className="bg3 row-box" style={{ width: "100%" }}>
            {item.tenMon}
          </div>
        </div>
      </td>

      <td style={{ display: "flex", alignItems: "center" }}>
        <div className="table-row">
          <div
            style={{ cursor: "pointer" }}
            onClick={() =>
              item.amount >= 0 && setAmount(item.id, item.amount - 1)
            }
          >
            <BiMinus size={30} />
          </div>
          <div className="bg3 row-box">{item.amount}</div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setAmount(item.id, item.amount + 1)}
          >
            <BiPlus size={30} />
          </div>
        </div>
      </td>

      <td>
        <div
          className="table-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <div>{item.gia * item.amount}</div>
        </div>
      </td>
    </tr>
  );
};
