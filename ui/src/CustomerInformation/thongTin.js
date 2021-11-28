import React, { useEffect, useState } from "react";

export const ThongTin = (props) => {
    const { item } = props;
  return (
    <tr style={{ backgroundColor: "var(--cl1)", height: "30px" }}>
        <th>{item.tenkh}</th>
        <th>{item.sdt}</th>
        <th>{item.solan}</th>
        <th>{item.pointkh}</th>
        <th>{item.hangkh}</th>
    </tr>
  );
};
