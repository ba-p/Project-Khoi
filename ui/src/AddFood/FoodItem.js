import { useState } from "react";

const FoodItem = ({item}) => {
    const [statusCol, setstatusCol] = useState({ 
        col1: 'normal', col2: 'normal', col3: 'normal'
    })
    return ( 
        <tr>
            {/* {col1==='normal'? */}
            <td onDoubleClick={()=>{alert("Double click")}}>{item.id}</td>
            {/* <input>{item.idmonan}</input> */}
            {/* } */}
            
            <td>{item.tenMon}</td>
            <td>{item.gia}</td>
        </tr>
     );
}
 
export default FoodItem;