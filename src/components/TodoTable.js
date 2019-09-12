import React from 'react'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
const TodoTable = (props) => {

  const columns = [{
    Header: 'Date',
    accessor: 'date' 
    }, {
    Header: 'Description',
    accessor: 'desc',
    }, {
      Cell: ({index}) => 
      <button onClick={()=> {props.deleteRow(index)}} >Delete</button> 
    }]

return(
<div>

      
<ReactTable data={props.listItems} columns = {columns} filterable='true' defaultPageSize='10'  />
    
</div>
);
}

export default TodoTable
