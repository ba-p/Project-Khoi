import "./page2.css";
import { BiMinus, BiPlus } from "react-icons/bi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Page2Item } from "./page2Item";
import { v4 } from "uuid";
import jojo from "../images/jojo.png"
const Page2 = () => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { idkh } = location.state;

  const handlePay = async () => {
      const newData = data.filter(item => item.amount > 0);
    navigate("/page3", {
      state: {
        idorder: v4(),
        idkh,
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
    let totalPriceTmp = 0;
    for (let i = 0;i<data.length;i++){
      let price = parseInt(data[i].gia) * data[i].amount;
      totalPriceTmp+=price;
    }
    setTotalPrice(totalPriceTmp);
  };

  const setAmount = (id, newAmount) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, amount: Math.max(newAmount,0) };
        }
        return item;
      })
    );
  };
  console.log("data: ",data);
  return (
    <div>
      <div className="header bg1 cl1">
        <h1 style={{ margin: 0, lineHeight: "100%", fontSize: "40px" }}>
          Menu
        </h1>
        <img height="80" src={jojo} alt="Ten quan"/>
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
      <br/>
    </div>
  );
};

export default Page2;
