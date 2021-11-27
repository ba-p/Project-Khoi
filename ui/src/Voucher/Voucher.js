import style from "./style.module.css"
const Voucher = () => {
    return (
        <div>
            <div className={style.title}>
                Quản lý voucher
            </div>
            <table className={style.table}>
                <tr style={{ backgroundColor: "var(--cl3)", height: "30px" }}>
                    <th width="50%">ID VOUCHER</th>
                    <th>GIẢM</th>
                    <th>{"       "}</th>
                </tr>
            </table>
            <div className={style.footer}>
                <button style={{ backgroundColor: "var(--cl3)", marginRight: "10px" }}>Thêm</button>
                <button style={{ backgroundColor: "var(--cl3)" }}>Lưu</button>
            </div>
        </div>
    );
}

export default Voucher;