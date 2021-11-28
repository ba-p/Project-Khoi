import { useState } from "react";

const FoodItem = ({ item, handleUpdate, handleDelete, handleChangeName, handleChangePrice, handleAdd }) => {
    const [isUpdate2, setisUpdate2] = useState(false)
    const [isUpdate3, setisUpdate3] = useState(false)
    const handleChange = (e, colIndex) => {
        if (colIndex === 2) {
            handleChangeName(item.id, e.target.value);
            handleUpdate(item.id, e.target.value, item.gia);
        }
        if (colIndex === 3){
            handleChangePrice(item.id, e.target.value);
            handleUpdate(item.id, item.tenMon, e.target.value)
        }
    }
    return (
        <tr align="center">
            <td>{item.id}</td>
            {isUpdate2 ?
                <input
                    autoFocus
                    type="text"
                    defaultValue={item.tenMon}
                    onBlur={(e) => { setisUpdate2(!isUpdate2); handleChange(e, 2) }}
                /> :
                <td onDoubleClick={() => { setisUpdate2(!isUpdate2) }}>{item.tenMon}</td>}
            {isUpdate3 ?
                <input
                    autoFocus
                    type="text"
                    defaultValue={item.gia}
                    onBlur={(e) => { setisUpdate3(!isUpdate3); handleChange(e, 3) }}
                /> :
                <td onDoubleClick={() => { setisUpdate3(!isUpdate3) }}>{item.gia}</td>}
            <td>
                <button onClick={() => { handleDelete(item.id) }}>Xóa</button>
            </td>
        </tr>
    );
}

export default FoodItem;
