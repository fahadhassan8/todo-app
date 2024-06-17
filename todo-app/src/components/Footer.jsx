import styles from './Footer.module.css'
export default function Footer({completedTodos,totalTodos}){
    return(
        <>
        <h1 className={styles.footer_completed_todos}>Completed Todos: {completedTodos}</h1>
        <h1 className={styles.footer_total_todos}>Total Todos: {totalTodos}</h1>
        </>
    )
}