import Link from 'next/link'
import {useEffect,useState} from "react"
import styles from "@/styles/NavBar.module.css"



export default function NavBar() {
  const [navFixed,setNavFixed] = useState(false);
  const [offCanvasVisible,setOffCanvasVisible] = useState(false);

  const navClasses = "navContainer"
  const canvasClasses = "nav-visible"
  
  const handleTogglerClick = ()=>{}

  const handleScroll=()=>{
    window.scrollY>=300?setNavFixed(true):setNavFixed(false);
  }

  useEffect(() => {
    window.addEventListener("scroll",handleScroll)
    return () => {
    window.removeEventListener("scroll",handleScroll)
    };
  }, [navFixed]);


  return (
    <div className={navFixed?styles.fixed:styles.navContainer}>
       <div className={styles.logo}><img src="/logo.svg" alt="logo"/></div>
    
       <div className={styles.links}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">About Us</Link></li>
            <li><Link href="/">Accademics</Link></li>
            <li><Link href="/">Blog</Link></li>
          </ul>
       </div>
       <div className={styles.socialPack}>
       <i className="fa fa-facebook-official"></i>
       <i className="fa fa-twitter"></i>
       <i className="fa fa-linkedin"></i>
       </div>

       <span className={styles.toggler} onClick={handleTogglerClick}>X</span>
    </div>
  )
}
