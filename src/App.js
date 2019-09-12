import React, {useState} from 'react';
import './App.css';

function App() {

const [desc, setDesc] = useState ( {desc: '', date: ''});
const [listItems, setListItems] = useState([]);


const addTodo = (event) => {
  event.preventDefault();
  setListItems([...listItems, desc]);
}

const inputChanged = (event) => {
  setDesc({...desc, [event.target.name]: event.target.value});
}

const deleteRow = (rowindex) => {
const newTodo = listItems.filter((listItems, i) => i !== rowindex)
  setListItems(newTodo);
}

  return (
    <div className="App">
     
     <form onSubmit={addTodo}>
   Description:  <input type="text" name="desc" value={desc.desc} onChange={inputChanged}/>
   Date: <input type="text" name="date" value={desc.date} onChange={inputChanged}/>
    <input type="Submit" value="add"/>
    </form>
    <table><tbody><th>Date</th><th>Description</th>{
      listItems.map((item, rowindex) => 
    <tr key ={rowindex}>
      
      <td>{item.date}</td><td>{item.desc}</td><button onClick={()=> {deleteRow(rowindex)}} >Delete</button>
    </tr>)}</tbody></table>
    </div>
  );
}
export default App;