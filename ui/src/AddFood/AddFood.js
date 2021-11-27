import style from './style.module.css'
const AddFood = () => {
    return (
        <div>
            <div className={style.title}>
                Thêm món ăn
            </div>
            <div className={style.footer}>
                <button style={{ backgroundColor: "var(--cl2)", color: "white" }}>Trở về</button>
                <button style={{ backgroundColor: "var(--cl1)" }}>Cập nhật</button>
            </div>
        </div>
    );
}

export default AddFood;