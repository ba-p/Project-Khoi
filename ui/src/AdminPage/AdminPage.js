import { Link } from 'react-router-dom';
import style from './style.module.css'
const AdminPage = () => {
    return (
        <div>
            <Link to="/CustomerInformation"><div className={style.title} style={{ marginTop: "10vh" }}>
                Thông tin khách hàng
            </div></Link>
            <Link to="/UpdateInvoiceStatus"><div className={style.title}>
                Cập nhật trạng thái hóa đơn
            </div></Link>
            <Link to="/AddFood"><div className={style.title}>
                Chỉnh sửa món ăn
            </div></Link>
            <Link to="/Voucher"><div className={style.title}>
                Quản lý voucher
            </div></Link>
        </div>
    );
}

export default AdminPage;