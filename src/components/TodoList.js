import React from 'react'

const TodoList = (props) => {

return(
<div>

<form onSubmit={props.addTodo}>
  
   Description:  <input type="text" name="desc" value={props.desc.desc} onChange={props.inputChanged}/>
   Date: <input type="text" name="date" value={props.desc.date} onChange={props.inputChanged}/>
    <input type="Submit" value="add"/>
    </form>

</div>
);
}

export default TodoList
