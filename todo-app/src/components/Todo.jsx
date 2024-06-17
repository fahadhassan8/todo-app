import { useState } from "react";
import Todos_Item from "./Todos_Item";
import Footer from './Footer.jsx'
import DeveloperHeader from "./DeveloperHeader.jsx";
import styles from './Todo.module.css'
// const header = {color:"green", textAlign: "center"};

export default function Todo() {
  const [todo, setTodo] = useState({name:"", done: false});
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length
  let handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"", done: false});
  };
  return (
    <>
    <div className={styles.todo_main}>
    <h2 className={styles.todo_main_heading}>Todo App</h2>
      <form onSubmit={handleSubmit}>
        <input className={styles.todo_inp_box}
          type="text"
          placeholder="Enter todo item..."
          value={todo.name}
          onChange={(e) => setTodo({name:e.target.value})}
        />
        <button type="submit">Add</button>
      </form>
      {/* {todos} */}
      <div className={styles.todo_form}>
      {todos.map((item) => (
        <Todos_Item key={item.name} item={item} todos={todos} setTodos={setTodos} />
      ))}
      </div>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
      </div>
    <DeveloperHeader />
    </>
  );
}
