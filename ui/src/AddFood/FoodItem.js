import { useState } from "react";

const FoodItem = ({item}) => {
    const [statusCol, setstatusCol] = useState({ 
        col1: 'normal', col2: 'normal', col3: 'normal'
    })
    return ( 
        <tr>
            {/* {col1==='normal'? */}
            <td style={{verticalAlign: 'middle', textAlign: 'center'}} onDoubleClick={()=>{alert("Double click")}}>{item.id}</td>
            {/* <input>{item.idmonan}</input> */}
            {/* } */}
            
            <td style={{verticalAlign: 'middle', textAlign: 'center'}}>{item.tenMon}</td>
            <td style={{verticalAlign: 'middle', textAlign: 'center'}}>{item.gia}</td>
        </tr>
     );
}
 
export default FoodItem;