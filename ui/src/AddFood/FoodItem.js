import { useState } from "react";

const FoodItem = ({ item }) => {
  const [isEditId, setEditId] = useState(false);

  return (
    <tr>
      {/* {col1==='normal'? */}
      {!isEditId ? (
        <td
          style={{ verticalAlign: "middle", textAlign: "center" }}
          onDoubleClick={() => {
            setEditId(true);
          }}
        >
          {item.id}
        </td>
      ) : (
        <input value={item.id} />
      )}

      <td style={{ verticalAlign: "middle", textAlign: "center" }}>
        {item.tenMon}
      </td>
      <td style={{ verticalAlign: "middle", textAlign: "center" }}>
        {item.gia}
      </td>
    </tr>
  );
};

export default FoodItem;
