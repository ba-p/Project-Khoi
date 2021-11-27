import style from "./style.module.css"
const CustomerInforamtion = () => {
    return ( 
        <div>
            <div>
            <div className={style.title}>
                Thông tin khách hàng
            </div>
            <table className={style.table}>
                <tr style={{backgroundColor: "var(--cl3)", height: "30px"}}>
                    <th width="20%">ID KHÁCH HÀNG</th>
                    <th width="20%">TÊN KHÁCH HÀNG</th>
                    <th>SĐT</th>
                    <th>LẦN ĐẶT</th>
                    <th width="10%">ĐIỂM</th>
                    <th>HẠNG</th>
                    <th>{"       "}</th>
                </tr>
            </table>
            <div className={style.footer}>
                <button style={{backgroundColor: "var(--cl3)", marginRight: "10px"}}>Thêm</button>
                <button style={{backgroundColor: "var(--cl3)"}}>Lưu</button>
            </div>
        </div>
        </div>
     );
}
 
export default CustomerInforamtion;