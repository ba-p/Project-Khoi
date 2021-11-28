import React, { useEffect, useState } from "react";

export const BillItem = (props) => {
    const { item, updateStatus } = props;
    const [status, setStatus] = useState(['Đã thanh toán', 'Chưa thanh toán']);
    useEffect(() => {
        if (item.status === 'invalid') {
            setStatus(['Chưa thanh toán', 'Đã thanh toán']);
        }
        else {
            setStatus(['Đã thanh toán', 'Chưa thanh toán']);
        }
    },[])

    const changeStatus = (e) => {
        if (e.target.value === 'Chưa thanh toán') {
            updateStatus(item.id, 'invalid');
        } 
        else {
            updateStatus(item.id, 'valid');
        }
    }
  return (
    <tr style={{ backgroundColor: "var(--cl1)", height: "30px" }}>
      <th>{item?.id}</th>
      <th>{item.tenkh}</th>
      <th>{item.tong}</th>
      <th>
      <select style={{backgroundColor: item.status==="valid"?"#8cff7d":"#d9d9d9"}} onChange={changeStatus}>
          <option style={{backgroundColor: "white"}}>{status[0]}</option>
          <option style={{backgroundColor: "white"}}>{status[1]}</option>
      </select>
      </th>
    </tr>
  );
};
