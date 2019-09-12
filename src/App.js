import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable'
import TodoList from './components/TodoList'

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
  setListItems(listItems.filter((listItems, i) => i !== rowindex))
}

  return (
    <div className="App">

    <TodoList  inputChanged = {inputChanged} addTodo = {addTodo} desc = {desc}/>
    <TodoTable  listItems = {listItems} deleteRow ={deleteRow}/>
    
    </div>
  );
}
export default App;