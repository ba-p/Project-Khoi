import React, { useEffect, useState } from "react";

export const ThongTin = (props) => {
    const { item } = props;
    let hang = "";
    if(item.point < 5){  
      hang = "thuong"
    }
    else if (item.point >=5 && item.point < 10){
      hang ="bac"
    }
    else if (item.point >=10 && item.point < 15){
      hang ="vang"
    }else {
      hang ="VIP"
    };
  return (
    <tr style={{ backgroundColor: "var(--cl1)", height: "30px" }}>
        <th>{item.tenkh}</th>
        <th>{item.sdt}</th>
        <th>{item.solan}</th>
        <th>{item.point}</th>
        <th>{hang}</th>
        
    </tr>
  );
};
