import "./page2.css";
import { BiMinus, BiPlus } from "react-icons/bi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Page2Item } from "./page2Item";
import { v4 } from "uuid";
const Page2 = () => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { idKh } = location.state;

  const handlePay = async () => {
      const newData = data.filter(item => item.amount > 0);
    navigate("/page3", {
      state: {
        idorder: v4(),
        idKh,
        stt: "invalid",
        chitiet: newData,
      },
    });
  };
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8080/api/xemMonAn");
      const newData = response.data.map((item) => {
        return { ...item, amount: 0 };
      });
      setData(newData);
    })();
  }, []);

  const handlePrice = (price) => {
    if (price > 0) {
      setTotalPrice(totalPrice + price);
    }
  };

  const setAmount = (id, newAmount) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, amount: newAmount };
        }
        return item;
      })
    );
  };
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
              return (
                <Page2Item
                  item={item}
                  setAmount={setAmount}
                  handlePrice={handlePrice}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="footer">
        <div className="footer-left">
          <h2 className="cl1">Tổng</h2>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="total bg1"
          >
            <div
              style={{
                width: "50%",
                margin: "auto",
                textAlign: "center",
                fontSize: "2em",
              }}
            >
              {totalPrice}
            </div>
          </div>
        </div>
        <button onClick={handlePay} className="pay bg1 cl1">
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default Page2;
