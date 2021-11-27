import "./page1.css"
import Food from "../images/food.png"
import 'antd/dist/antd.css';
import { Rate } from "antd";
import { Link, useLocation } from "react-router-dom";
const Page1 = () => {
    let location = useLocation().pathname;
    let page = location.includes("page4")?4:1;
    return (
        <div className="page1">
            <Link hidden={page===4} to="/AdminPage" className="admin-button">Quản trị viên</Link>
            <div className="page1-left">
                <div className="page1-box">
                    <h1 style={{ color: "#060461", fontSize: "3em", textAlign: "left" }}>
                        {page===1?"Đặt đơn hàng tại đây!":"Vui lòng đến quầy thanh toán!"}
                    </h1>
                    <form style={{ width: "100%", display: "block" }} >
                        <input hidden={page===4} placeholder="Tên của bạn" className="cl1 page1-input" type="text" /><br />
                        <input hidden={page===4} placeholder="Số điện thoại" className="cl1 page1-input" type="text" />
                        <Link to="/page2" >
                            <button className="bg2 page1-button">Tiếp theo</button>
                        </Link>
                    </form>
                </div>
                <span style={{color: "var(--cl2)", fontWeight: "bold", fontSize: "20px", marginRight: "10px"}}>Đánh giá đơn hàng</span>
                <Rate defaultValue={5}/>
            </div>
            <img width="30%" src={Food} alt="food" />
        </div>
    );
}

export default Page1;