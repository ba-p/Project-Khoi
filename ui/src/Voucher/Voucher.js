import { useEffect, useState } from "react";
import style from "./style.module.css";
import axios from "axios";
import { InVoucher } from "./InVoucher";
import { v4 } from "uuid";

const Voucher = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8080/api/xemVoucher");
      if (response.data) {
        setData(response.data);
      }
    })();
  }, []);

  const handleAddItem = () => {
    setData([...data, { idvoucher: "", giamgia: 0 }]);
  };

  const setValue = (key, value) => {
    
    if (key === "id") {
      setData(
        data.map((item, index) => {
          if (index === data.length - 1) {
            return { ...item, idvoucher: value };
          }
          return item;
        })
      );
    } else {
      setData(
        data.map((item, index) => {
          if (index === data.length - 1) {
            return { ...item, giamgia: value };
          }
          return item;
        })
      );
    }
  };

  const handleSave = async () => {
    const newData = data.map((item) => {
      return {
        id: item.idvoucher,
        giam: item.giamgia
      }
    })
    const rs = await axios.post("http://localhost:8080/api/themVoucher", {data: newData});
    console.log(`rs`, rs)
  }

  return (
    <div>
      <div className={style.title}>Quản lý voucher</div>
      <table className={style.table}>
        <tr style={{ backgroundColor: "var(--cl3)", height: "30px" }}>
          <th width="50%">ID VOUCHER</th>
          <th>GIẢM</th>
        </tr>
        {data.map((item, index) => {
          return <InVoucher item={item} key={index} setValue={setValue} />;
        })}
      </table>
      <div className={style.footer}>
        <button
          onClick={handleAddItem}
          style={{ backgroundColor: "var(--cl3)", marginRight: "10px" }}
        >
          Thêm
        </button>
        <button onClick={handleSave} style={{ backgroundColor: "var(--cl3)" }}>Lưu</button>
      </div>
    </div>
  );
};

export default Voucher;
