import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItem1 from "./components/TodoItem1"
import "./App.css";
import TodoItem2 from "./components/TodoItem2";

function App() {
  return <center class ="todo-container"> 
  <AppName></AppName>
  <AddTodo/>
  <div class="Items">
  <TodoItem1/>
  <TodoItem2></TodoItem2>

  </div>
  

 

  </center>
}

export default App
