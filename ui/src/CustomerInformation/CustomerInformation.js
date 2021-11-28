import { useEffect, useState } from "react";
import style from "./style.module.css";
import axios from "axios";
import { ThongTin } from "./ThongTin.js";

const CustomerInforamtion = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8080/api/xemThongTin");
      if (response.data) {
        setData(response.data);
      }
    })();
  }, []);

  return (
    <div>
      <div>
        <div className={style.title}>Thông tin khách hàng</div>
        <table className={style.table}>
          <tr style={{ backgroundColor: "var(--cl3)", height: "30px" }}>
            <th width="20%">TÊN KHÁCH HÀNG</th>
            <th>SĐT</th>
            <th>LẦN ĐẶT</th>
            <th width="10%">ĐIỂM</th>
            <th>HẠNG</th>
            <th>{"       "}</th>
          </tr>
          {data.map((item, index) => {
            return <ThongTin item={item} key={index} />;
          })}
        </table>
        {/* <div className={style.footer}>
          <button
            style={{ backgroundColor: "var(--cl3)", marginRight: "10px" }}
          >
            Thêm
          </button>
          <button style={{ backgroundColor: "var(--cl3)" }}>Lưu</button>
        </div> */}
      </div>
    </div>
  );
};

export default CustomerInforamtion;
