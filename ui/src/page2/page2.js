import "./page2.css"
import { BiMinus, BiPlus } from "react-icons/bi"
import { Link } from "react-router-dom";
const Page2 = () => {
    return (
        <div>

            <div className="header bg1 cl1">
                <h1 style={{ margin: 0, lineHeight: "100%", fontSize: "40px" }}>Menu</h1>
            </div>

            <div style={{minHeight: "60vh"}}>
                <table className="page2-table">

                    <thead className="cl1" style={{ fontWeight: "bold" }}>
                        <tr style={{ marginBottom: "20px" }}>
                            <td style={{ width: "50%" }}>Món ăn</td>
                            <td style={{ width: "20%" }}>Số lượng</td>
                            <td>Thành tiền</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>

                            <td>
                                <div className="table-row">
                                    <div className="bg3 row-box" style={{ width: "100%" }}></div>
                                </div>
                            </td>

                            <td>
                                <div className="table-row">
                                    <BiMinus size={30} />
                                    <div className="bg3 row-box">0</div>
                                    <BiPlus size={30} />
                                </div>
                            </td>

                            <td>
                                <div className="table-row">
                                    <div className="bg3 row-box" style={{ width: "100%" }}></div>
                                </div>
                            </td>

                        </tr>
                    </tbody>

                </table>
            </div>

            <div className="footer">
                <div className="footer-left">
                    <h2 className="cl1">Tổng</h2>
                    <div className="total bg1"></div>
                </div>
                <Link to="/page3">
                    <button className="pay bg1 cl1">Thanh toán</button>
                </Link>
            </div>
        </div>

    );
}

export default Page2;