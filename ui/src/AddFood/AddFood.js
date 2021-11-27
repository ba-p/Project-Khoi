import style from './style.module.css'
const AddFood = () => {
    return (
        <div>
            <div className={style.title}>
                Chỉnh sửa món ăn
            </div>
            <table className={style.table}>
                <tr style={{ backgroundColor: "var(--cl3)", height: "30px" }}>
                    <th width="20%">ID MÓN</th>
                    <th>TÊN MÓN ĂN</th>
                    <th>ĐƠN GIÁ</th>
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

export default AddFood;