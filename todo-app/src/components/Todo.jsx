import { useState } from "react";
import Todos_Item from "./Todos_Item";
import styles from './Todo.module.css'
// const header = {color:"green", textAlign: "center"};

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  let handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <>
    <div className={styles.todo_main}>
    <h2 className={styles.todo_main_heading}>Todo App</h2>
      <form onSubmit={handleSubmit}>
        <input className={styles.todo_inp_box}
          type="text"
          placeholder="Enter todo item..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {/* {todos} */}
      <div className={styles.todo_form}>
      {todos.map((item) => (
        <Todos_Item key={item} item={item} />
      ))}
      </div>
      </div>
    </>
  );
}
