import React from "react";

export const BillItem = (props) => {
    const { item } = props;
  return (
    <tr style={{ backgroundColor: "#fff", height: "30px" }}>
      <th>{item?.id}</th>
      <th>{item.name}</th>
      <th>{item.total}</th>
      <th>{item.status}</th>
      <th>{"       "}</th>
    </tr>
  );
};
