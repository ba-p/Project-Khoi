import style from './style.module.css'
const AdminPage = () => {
    return (
        <div>
            <div className={style.title} style={{ marginTop: "10vh" }}>
                Thông tin khách hàng
            </div>
            <div className={style.title}>
                Cập nhật trạng thái hóa đơn
            </div>
            <div className={style.title}>
                Chỉnh sửa hóa đơn
            </div>
            <div className={style.title}>
                Quản lý voucher
            </div>
        </div>
    );
}

export default AdminPage;