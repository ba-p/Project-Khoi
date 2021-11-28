import { useEffect, useState } from "react";
import style from "./style.module.css";
import axios from "axios";
import { InVoucher } from "./InVoucher";

const Voucher = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "http://localhost:8080/api/xemVoucher"
      );
      if (response.data) {
        setData(response.data);
      }
    })();
  }, []);

  return (
    <div>
      <div className={style.title}>Quản lý voucher</div>
      <table className={style.table}>
        <tr style={{ backgroundColor: "var(--cl3)", height: "30px" }}>
          <th width="50%">ID VOUCHER</th>
          <th>GIẢM</th>
          <th>{"       "}</th>
        </tr>
        {data.map((item, index) => {
          return <InVoucher item={item} key={index} />;
        })}
      </table>
      <div className={style.footer}>
        <button style={{ backgroundColor: "var(--cl3)", marginRight: "10px" }}>
          Thêm
        </button>
        <button style={{ backgroundColor: "var(--cl3)" }}>Lưu</button>
      </div>
    </div>
  );
};

export default Voucher;
