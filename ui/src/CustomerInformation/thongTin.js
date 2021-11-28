import React, { useEffect, useState } from "react";

export const ThongTin = (props) => {
    const { item } = props;
  return (
    <tr style={{ backgroundColor: "#fff", height: "30px" }}>
      
        <th>{item.tenkh}</th>
        <th>{item.sdtkh}</th>
        <th>{item.landat}</th>
        <th>{item.pointkh}</th>
        <th>{item.hangkh}</th>
        <th>{"       "}</th>
        
    </tr>
  );
};
