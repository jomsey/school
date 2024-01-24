import styles from "@/styles/LoadingScreen.module.css"
import config from "jsconfig.json"
export default function LoadingScreen() {
  return (
    <div className={styles.loadingContainer}>
      <h1>{config.siteName}</h1>
      <div className={styles.loader}>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
      </div>
    </div>
  )
}
