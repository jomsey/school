import styles from "@/styles/LoadingScreen.module.css"

export default function LoadingScreen() {
  return (
    <div className={styles.loadingContainer}>
      <h1>Lodwar Galille School</h1>
      <div className={styles.loader}>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
      </div>
    </div>
  )
}
