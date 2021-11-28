import { Modal } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FoodItem from './FoodItem';
import style from './style.module.css'
const AddFood = () => {
    const [data, setData] = useState([]);
    const [changePriceList, setchangePriceList] = useState([])
    const [changeNameList, setchangeNameList] = useState([])
    const [deleteList, setdeleteList] = useState([])
    const [addList, setaddList] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [addID, setaddID] = useState("")
    const [addName, setaddName] = useState("")
    const [addPrice, setaddPrice] = useState(0)
    const handleCancelModal = () => {
        setIsModalVisible(false);
    };
    const handleOkModal = (e) => {
        setIsModalVisible(false);
        handleAdd(addID, addName, addPrice)
    };
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleSave = () => {
        axios.post("http://localhost:8080/api/themMonAn", { data: addList })
        setaddList([])
        axios.post("http://localhost:8080/api/xoaMonAn", { data: deleteList })
        setdeleteList([])
        axios.post("http://localhost:8080/api/doiTen", { data: changeNameList })
        setchangeNameList([])
        axios.post("http://localhost:8080/api/doiGia", { data: changePriceList })
        setchangePriceList([])
        alert("Cập nhật thành công")
    }
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
    const handleDelte = (id) => {
        setData(data.filter(item => item.id !== id));
        setdeleteList([...deleteList, id])
    }
    const handleChangeName = (id, ten) => {
        setchangeNameList([...changeNameList, {
            id: id,
            ten: ten,
        }])
    }
    const handleChangePrice = (id, gia) => {
        setchangePriceList([...changePriceList, {
            id: id,
            gia: gia,
        }])
    }
    const handleAdd = (id, ten, gia) => {
        setaddList([...addList, {
            id: id,
            ten: ten,
            gia: gia,
        }])
        setData([...data, {id, tenMon: ten, gia}])
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
                {data.map((item) =>
                    <FoodItem
                        handleDelete={handleDelte}
                        handleUpdate={handleUpdate}
                        item={item}
                        handleChangeName={handleChangeName}
                        handleChangePrice={handleChangePrice}
                        handleAdd={handleAdd}
                    />)}
            </table>
            <div className={style.footer}>
                <button onClick={showModal} style={{ backgroundColor: "var(--cl3)", marginRight: "10px" }}>Thêm</button>
                <button onClick={handleSave} style={{ backgroundColor: "var(--cl3)" }}>Lưu</button>
            </div>
            <Modal width="50%" title="Thêm món ăn" visible={isModalVisible} onOk={(e) => {handleOkModal(e)}} onCancel={handleCancelModal}>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <input onChange={(e) => {setaddID(e.target.value)}} type="text" placeholder="ID món ăn" />
                    <input onChange={(e) => {setaddName(e.target.value)}} type="text" placeholder="Tên món ăn" />
                    <input onChange={(e) => {setaddPrice(e.target.value)}} type="number" placeholder="Giá món ăn" />
                </div>
            </Modal>
        </div>
    );
}

export default AddFood;