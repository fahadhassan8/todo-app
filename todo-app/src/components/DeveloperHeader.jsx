import styles from './Dev.module.css'
export default function DeveloperHeader(){
    return(
        <>
        <div className={styles.devHeader}>
            <h2 className={styles.dev}><a href="https://fahad-hassan-portfolio.netlify.app/">Fahad Hassan</a></h2>
            <h2 className={styles.github}><a href="https://github.com/fahadhassan8">GitHub</a></h2>
        </div>
        </>
    )
}