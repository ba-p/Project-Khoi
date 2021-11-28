import axios from 'axios';
import { useEffect, useState } from 'react';
import FoodItem from './FoodItem';
import style from './style.module.css'
const AddFood = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await axios.get("http://localhost:8080/api/xemMonAn");
            if (response.data) {
                setData(response.data);
            }
        })();
    }, [])
    const handleUpdate = (id, tenMon, gia) => {
        let index = data.findIndex(item => item.id === id)
        let tmpData = data;
        tmpData[index] = { id, tenMon, gia }
        setData([...tmpData]);
    }
    return (
        <div>
            <div className={style.title}>
                Chỉnh sửa món ăn
            </div>
            <table className={style.table}>
                <tr style={{ backgroundColor: "var(--cl3)", height: "30px" }}>
                    <th width="20%">ID MÓN</th>
                    <th width="50%">TÊN MÓN ĂN</th>
                    <th>ĐƠN GIÁ</th>
                    <th>{"       "}</th>
                </tr>
                {data.map((item) => <FoodItem handleUpdate={handleUpdate} item={item} />)}
            </table>
            <div className={style.footer}>
                <button style={{ backgroundColor: "var(--cl3)", marginRight: "10px" }}>Thêm</button>
                <button onClick={() => console.log("Click")} style={{ backgroundColor: "var(--cl3)" }}>Lưu</button>
            </div>
        </div>
    );
}

export default AddFood;