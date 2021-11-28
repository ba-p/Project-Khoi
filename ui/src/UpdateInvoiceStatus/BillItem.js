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
    <tr style={{ backgroundColor: "#fff", height: "30px" }}>
      <th>{item?.id}</th>
      <th>{item.tenkh}</th>
      <th>{item.tong}</th>
      <th>
      <select onChange={changeStatus}>
          <option >{status[0]}</option>
          <option >{status[1]}</option>
      </select>
      </th>
      <th>{"       "}</th>
    </tr>
  );
};
