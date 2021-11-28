import { useState } from "react";

const FoodItem = ({item}) => {
    const [statusCol, setstatusCol] = useState({ 
        col1: 'normal', col2: 'normal', col3: 'normal'
    })
    return ( 
        <tr>
            {/* {col1==='normal'? */}
            <td onDoubleClick={()=>{alert("Double click")}}>{item.idmonan}</td>
            {/* <input>{item.idmonan}</input> */}
            {/* } */}
            
            <td>{item.tenmon}</td>
            <td>{item.gia}</td>
        </tr>
     );
}
 
export default FoodItem;