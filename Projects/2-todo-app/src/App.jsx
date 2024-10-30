import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      item: 'buy Milk',
      date: '10/29/2024'
    },
    {
      item: 'Reading Books',
      date: '10/29/2024'
    },
    {
      item: 'Problem Solve',
      date: '10/29/2024'
    },
  ];

  return (
    <>
      <center className="todo-container"> 
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;

