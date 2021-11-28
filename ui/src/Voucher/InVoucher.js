import React, { useEffect, useState } from "react";

export const InVoucher = (props) => {
  const { item, setValue } = props;
  return (
    <tr style={{ backgroundColor: "var(--cl1)", height: "30px" }}>
      <th>
        {item?.idvoucher ? (
          item.idvoucher
        ) : (
          <input
            placeholder="id của voucher"
            onChange={(e) =>
              setTimeout(() => setValue("id", e.target.value), 1000)
            }
          />
        )}
      </th>
      <th>
        {item?.giamgia > 0 ? (
          item?.giamgia
        ) : (
          <input
            placeholder="số tiền giảm"
            onChange={(e) =>
              setTimeout(() => setValue("price", e.target.value), 1000)
            }
          />
        )}
      </th>
    </tr>
  );
};
