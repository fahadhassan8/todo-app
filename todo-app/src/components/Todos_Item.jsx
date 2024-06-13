import styles from './Todo.module.css'
export default function Todos_Item({item}){
    return(
        <>
        <h1 className={styles.todo_list}>{item}</h1>
        <hr className={styles.line}/>
        </>
    )
}