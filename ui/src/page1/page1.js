import "./page1.css";
import Food from "../images/food.png";
import "antd/dist/antd.css";
import { Rate } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 } from "uuid";
import axios from "axios";

const Page1 = () => {
  let location = useLocation();
  let isPayPage = location.pathname.includes("page4");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [disableRate, setDisableRate] = useState(0)
  const handleAddCustomer = async () => {
    let id = v4().slice(0,4);
    const rs = await axios.post("http://localhost:8080/api/taotaikhoan", {
      id,
      name,
      phone,
    });
    navigate("/page2", {
      state: {
        idkh: id,
      },
    });
  };
  const handleRate = async (value) => {
    let today = new Date();
    let idOrder = location.state.idOrder;
    const rs = await axios.post('http://localhost:8080/api/danhgia', {
      idOrder,
      today,
      value
    })
    alert("Đánh giá thành công")
    setDisableRate(1);

  }
  return (
    <div className="page1">
      <Link hidden={isPayPage} to="/AdminPage" className="admin-button">
        Quản trị viên
      </Link>
      <div className="page1-left">
        <div className="page1-box">
          <h1 style={{ color: "#060461", fontSize: "3em", textAlign: "left" }}>
            {isPayPage
              ? "Vui lòng đến quầy thanh toán!" : "Đặt đơn hàng tại đây!"}
          </h1>
          <input
            hidden={isPayPage}
            placeholder="Tên của bạn"
            className="cl1 page1-input"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            hidden={isPayPage}
            placeholder="Số điện thoại"
            className="cl1 page1-input"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
          />
          {isPayPage ?
            <button onClick={()=>{navigate("/")}} className="bg2 page1-button">
              Đơn hàng khác
            </button>
            :
            <button onClick={handleAddCustomer} className="bg2 page1-button">
              Tiếp theo
            </button>
          }
        </div>
        {isPayPage && (
          <>
            <span
              style={{
                color: "var(--cl2)",
                fontWeight: "bold",
                fontSize: "20px",
                marginRight: "10px",
              }}
            >
              Đánh giá đơn hàng
            </span>
            <Rate onChange={handleRate} disabled={disableRate} />
          </>
        )}
      </div>
      <img width="40%" src={Food} alt="food" />
    </div>
  );
};

export default Page1;
