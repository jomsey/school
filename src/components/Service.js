import styles from "@/styles/Service.module.css"

export default function Service({name,desc,bg}) {
  return (
    <div className={styles.singleService} style={{backgroundColor:bg}}>
        <h3>{name}</h3>
        <p>{desc}</p>
    </div>
  )
}
