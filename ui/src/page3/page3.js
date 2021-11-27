import { Link } from "react-router-dom";
import style from './style.module.css'
const Page3 = () => {
    return (
        <div>
            <h1 style={{ marginLeft: "40px" }}>
                Thanh toán
            </h1>
            <div className={style.content}>
                <table className={style.table}>
                    <thead className="cl1" style={{ fontSize: "20px", textAlign: "center", fontWeight: "bold" }}>
                        <tr>
                            <td>Món ăn</td>
                            <td>Số lượng</td>
                            <td>Thành tiền</td>
                        </tr>
                    </thead>

                    <tbody>

                    </tbody>

                </table>
                <div className={style.line}></div>
                <div className={style.footer}>
                    <div>
                        <span style={{marginRight: "15px"}}>Mã giảm giá</span>
                        <input className={style.voucher}></input>
                    </div>
                    <div>
                        280.000 đồng
                    </div>
                </div>
            </div>
            <Link to='/page4' className={style.orderBtn}>Đặt hàng</Link>
        </div>
    );
}

export default Page3;
