import React, { useEffect, useState } from "react";

export const InVoucher = (props) => {
    const { item } = props;
  return (
    <tr style={{ backgroundColor: "#fff", height: "30px" }}>
      
        <th>{item?.idvoucher}</th>
        <th>{item.giamgia}</th>
        
    </tr>
  );
};
