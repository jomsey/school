import Link from 'next/link'
import styles from '@/styles/NavBar.module.css'
import {useEffect,useState} from "react"
import {useRouter} from 'next/router'
import {FaFacebook,FaTwitter} from "react-icons/fa6"


export default function NavBar() {
  const [navFixed,setNavFixed] = useState(false);
  const [offCanvasVisible,setOffCanvasVisible] = useState(false);
  const {pathname} = useRouter()
  const handleScroll=()=>window.scrollY>=300?setNavFixed(true):setNavFixed(false);
  

  useEffect(() => {
    window.addEventListener("scroll",handleScroll)
    return () => {
    window.removeEventListener("scroll",handleScroll)
    };
  }, [navFixed]);


  return (
    <>
    {/* <div className={styles.banner}>
      <div className={styles.contacts}>
         <small>+254-114-411-986</small>
         <small>+254-114-411-986</small>
         <small>ouremail@domain.com</small>
      </div>
      <div className={styles.socialPack}>
       
       <FaFacebook/>
       <FaTwitter/>
       </div>
    </div> */}
     <div className={navFixed?styles.fixed:styles.navContainer}>
       <div className={styles.logo}><img src="/logo2.svg" alt="logo"/></div>
    
       <div className={offCanvasVisible?styles.linksVisible:styles.links}>
          <ul>
            <li onClick={()=>setOffCanvasVisible(false)}><Link className={pathname==="/"?"active":""} href="/">Home</Link></li>
            <li onClick={()=>setOffCanvasVisible(false)}><Link className={pathname==="/academics"?"active":""} href="/academics">Academics</Link></li>
            <li onClick={()=>setOffCanvasVisible(false)}><Link className={pathname==="/about"?"active":""} href="/about">About Us</Link></li>
            <li onClick={()=>setOffCanvasVisible(false)}><Link  href="#">Administration</Link></li>
            <li onClick={()=>setOffCanvasVisible(false)}><Link  href="/#contact">Contact</Link></li>

          </ul>
       </div>
       

       <div className={styles.toggler} onClick={()=>offCanvasVisible?setOffCanvasVisible(false):setOffCanvasVisible(true)
}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    </>
   
  )
}
