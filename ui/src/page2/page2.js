import "./page2.css";
import { BiMinus, BiPlus } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Page2Item } from "./page2Item";
const Page2 = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handlePay = () => {
    navigate("/page3", {});
  };
  useEffect(() => {
    const response = axios.get("http://localhost:8080/api/xemMonAn");
    setData(response.data);
  }, []);
  return (
    <div>
      <div className="header bg1 cl1">
        <h1 style={{ margin: 0, lineHeight: "100%", fontSize: "40px" }}>
          Menu
        </h1>
      </div>

      <div style={{ minHeight: "60vh" }}>
        <table className="page2-table">
          <thead className="cl1" style={{ fontWeight: "bold" }}>
            <tr style={{ marginBottom: "20px" }}>
              <td style={{ width: "50%" }}>Món ăn</td>
              <td style={{ width: "20%" }}>Số lượng</td>
              <td>Thành tiền</td>
            </tr>
          </thead>

          <tbody>
            {data?.map((item, index) => {
              return <Page2Item item={item} />;
            })}
          </tbody>
        </table>
      </div>

      <div className="footer">
        <div className="footer-left">
          <h2 className="cl1">Tổng</h2>
          <div className="total bg1"></div>
        </div>
        <button onClick={handlePay} className="pay bg1 cl1">
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default Page2;
