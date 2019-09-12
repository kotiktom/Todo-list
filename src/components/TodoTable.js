import React from 'react'

const TodoTable = (props) => {

return(
<div>

<table><tbody><th>Date</th><th>Description</th>{
      props.listItems.map((item, rowindex) => 
    <tr key ={rowindex}>
      
      <td>{item.date}</td><td>{item.desc}</td><button onClick={()=> {props.deleteRow(rowindex)}} >Delete</button>
    </tr>)}</tbody></table>
</div>
);
}

export default TodoTable
