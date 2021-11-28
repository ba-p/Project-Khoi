import React, { useEffect, useState } from "react";

export const thongTin = (props) => {
    const { item } = props;
  return (
    <tr style={{ backgroundColor: "#fff", height: "30px" }}>
      
        <th>{item?.idkh}</th>
        <th>{item.tenkh}</th>
        <th>{item.sdtkh}</th>
        <th>{0}</th>
        <th>{item.pointkh}</th>
        <th>{item.hangkh}</th>
        <th>{"       "}</th>
        
    </tr>
  );
};
