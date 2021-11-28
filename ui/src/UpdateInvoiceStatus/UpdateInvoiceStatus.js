import { useEffect, useState } from "react";
import style from "./style.module.css";
import axios from "axios";
import { BillItem } from "./BillItem";
import { Link } from 'react-router-dom';

const UpdateInvoiceStatus = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8080/api/xemhoadon");
      if (response.data) {
        setData(response.data);
      }
    })();
  }, []);

  const updateStatus = (id, status) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          item.status = status;
        }
        return item;
      })
    );
  };
  const handleUpdate = async () => {
    const response = await axios.post(
      "http://localhost:8080/api/updatestatus",
      { data }
    );
    if (response.data) {
      alert("Cập nhật thành công");
    }
  };
  return (
    <div>
      <div className={style.title}>Cập nhật trạng thái hóa đơn</div>
      <table className={style.table}>
        <tr style={{ backgroundColor: "var(--cl3)", height: "30px" }}>
          <th>MÃ HÓA ĐƠN</th>
          <th>KHÁCH HÀNG</th>
          <th>TỔNG TIỀN</th>
          <th>TRẠNG THÁI</th>
          <th>{"       "}</th>
        </tr>
        {data.map((item, index) => {
          return (
            <BillItem item={item} key={index} updateStatus={updateStatus} />
          );
        })}
      </table>
      <div className={style.footer}>
        <Link to='/AdminPage'>
        <button style={{ backgroundColor: "var(--cl2)", color: "white", marginRight: '20px' }}>
          Trở về
        </button>
        </Link>

        <button
          onClick={handleUpdate}
          style={{ backgroundColor: "var(--cl1)", display: "block" }}
        >
          Cập nhật
        </button>
      </div>
    </div>
  );
};

export default UpdateInvoiceStatus;
