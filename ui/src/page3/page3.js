import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./style.module.css";
const Page3 = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state.chitiet;
  const totalPrice = data.reduce(
    (acc, item) => acc + item.amount * parseInt(item.gia),
    0
  );

  const [voucher, setVoucher] = useState("");
  const handleSubmit = async () => {
    const newChitiet = location.state.chitiet.map((item) => {
      return {
        id: item.id,
        sl: item.amount,
        idorder: location.state.idorder,
      };
    });
    const dataSubmit = {
      ...location.state,
      chitiet: newChitiet,
      idvoucher: voucher,
    };

    const response = await axios.post(
      "http://localhost:8080/api/themChiTietHoaDon",
      dataSubmit
    );
    if (response.status === 200) {
      alert("Thanh toán thành công");
    }
    navigate("/page4")

  };
  return (
    <div>
      <h1 style={{ marginLeft: "40px" }}>Thanh toán</h1>
      <div className={style.content}>
        <table className={style.table}>
          <thead
            className="cl1"
            style={{
              fontSize: "20px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <tr>
              <td>Món ăn</td>
              <td>Số lượng</td>
              <td>Thành tiền</td>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => {
              return (
                <tr>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {item.tenMon}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {item.amount}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {parseInt(item.gia) * item.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={style.line}></div>
        <div className={style.footer}>
          <div>
            <span style={{ marginRight: "15px" }}>Mã giảm giá</span>
            <input
              onChange={(e) => setVoucher(e.target.value)}
              className={style.voucher}
            />
          </div>
          <div>{totalPrice} đồng</div>
        </div>
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={handleSubmit}
        className={style.orderBtn}
      >
        Đặt hàng
      </div>
    </div>
  );
};

export default Page3;
