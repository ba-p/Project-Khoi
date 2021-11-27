import style from "./style.module.css"
const UpdateInvoiceStatus = () => {
    return (
        <div>
            <div className={style.title}>
                Cập nhật trạng thái hóa đơn
            </div>
            <table className={style.table}>
                <tr style={{ backgroundColor: "var(--cl3)", height: "30px" }}>
                    <th>MÃ HÓA ĐƠN</th>
                    <th>KHÁCH HÀNG</th>
                    <th>TỔNG TIỀN</th>
                    <th>TRẠNG THÁI</th>
                    <th>{"       "}</th>
                </tr>
            </table>
            <div className={style.footer}>
                <button style={{ backgroundColor: "var(--cl3)" }}>Cập nhật</button>
            </div>
        </div>
    );
}

export default UpdateInvoiceStatus;