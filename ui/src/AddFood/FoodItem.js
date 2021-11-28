import { useState } from "react";

const FoodItem = ({ item, handleUpdate }) => {
    const [isUpdate1, setisUpdate1] = useState(false)
    const [isUpdate2, setisUpdate2] = useState(false)
    const [isUpdate3, setisUpdate3] = useState(false)
    const handleChange = (e, colIndex) => {
        if (colIndex === 1)
            handleUpdate(e.target.value, item.tenMon, item.gia);
        if (colIndex === 2)
            handleUpdate(item.id, e.target.value, item.gia);
        if (colIndex === 3)
            handleUpdate(item.id, item.tenMon, e.target.value)
    }
    return (
        <tr>
            {isUpdate1 ?
                <input
                    autoFocus
                    type="text"
                    defaultValue={item.id}
                    onBlur={() => { setisUpdate1(!isUpdate1) }}
                    onChange={(e) => { handleChange(e, 1) }}
                /> :
                <td onDoubleClick={() => { setisUpdate1(!isUpdate1) }}>{item.id}</td>}
            {isUpdate2 ?
                <input
                    autoFocus
                    type="text"
                    defaultValue={item.tenMon}
                    onBlur={() => { setisUpdate2(!isUpdate2) }}
                    onChange={(e) => { handleChange(e, 2) }}
                /> :
                <td onDoubleClick={() => { setisUpdate2(!isUpdate2) }}>{item.tenMon}</td>}
            {isUpdate3 ?
                <input
                    autoFocus
                    type="text"
                    defaultValue={item.gia}
                    onBlur={() => { setisUpdate3(!isUpdate3) }}
                    onChange={(e) => { handleChange(e, 3) }}
                /> :
                <td onDoubleClick={() => { setisUpdate3(!isUpdate3) }}>{item.gia}</td>}
        </tr>
    );
}

export default FoodItem;