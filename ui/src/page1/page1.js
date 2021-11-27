import "./page1.css";
import Food from "../images/food.png";
import "antd/dist/antd.css";
import { Rate } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { v4 } from "uuid";
import axios from 'axios'

const Page1 = () => {
  let location = useLocation().pathname;
  let isPayPage = location.includes("page4");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddCustomer = async () => {
      const id = v4()
      const rs = await axios.post('http://localhost:8080/api/taotaikhoan', {
          id,
          name,
          phone
      })
      console.log(`rs`, rs)
  };
  return (
    <div className="page1">
      <Link hidden={isPayPage === 4} to="/AdminPage" className="admin-button">
        Quản trị viên
      </Link>
      <div className="page1-left">
        <div className="page1-box">
          <h1 style={{ color: "#060461", fontSize: "3em", textAlign: "left" }}>
            {isPayPage === 1
              ? "Đặt đơn hàng tại đây!"
              : "Vui lòng đến quầy thanh toán!"}
          </h1>
          <form style={{ width: "100%", display: "block" }}>
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
            <Link to="/page2">
              <button onClick={handleAddCustomer} className="bg2 page1-button">
                Tiếp theo
              </button>
            </Link>
          </form>
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
            <Rate defaultValue={5} />
          </>
        )}
      </div>
      <img width="40%" src={Food} alt="food" />
    </div>
  );
};

export default Page1;
