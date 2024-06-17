import styles from './Todo.module.css'
export default function Todos_Item({item,todos,setTodos}){
    let handleDelete = (item) => {
       setTodos(todos.filter((todo)=>todo !== item));
    }
    let handleClick = (name) => {
       const newArray = todos.map((todo) => todo.name === name ? {...todo, done: !todo.done} : todo);
       setTodos(newArray);
    }
    let taskDone = item.done ? styles.taskCompleted : "";
    return(
        <>
        <h1 className={styles.todo_list}>
            <span className={taskDone} onClick={()=>handleClick(item.name)}>{item.name}</span>
            <span>
                <button onClick={() => handleDelete(item)} className={styles.dltBtn}>x</button>
            </span>
        </h1>
        <hr className={styles.line}/>
        </>
    )
}