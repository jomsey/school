import Link from 'next/link'
import styles from "@/styles/Footer.module.css"
import config from "jsconfig.json"
import {FaF, FaFacebook,FaTwitter} from "react-icons/fa6"


function Footer() {
  return (
    <>
     <section className={styles.bottomNav}>
          <div className={styles.badge}>
              <img src="/badge2.jpg" />
          </div>

          <div className={styles.linksContainer}>

                <div className={styles.links}>
                    <h4>Main Links</h4>
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/academics">Academics</Link></li>
                      <li><Link href="/">Blog</Link></li>
                      <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <h4>Other Links</h4>
                    <ul>
                      <li><Link href="/">Privacy policy</Link></li>
                      <li><Link href="/">Terms of use</Link></li>
                      <li><Link href="/">Disclaimer</Link></li>
                    </ul>

                </div>
                <div className={styles.links}>
            <h4>Contacts</h4>
            {/* <div className={styles.socialPack}>
            <FaFacebook/>
            <FaTwitter/>
              </div> */}
                
                <span>+254-000-000-000</span>
                <br/>
                <span>+254-111-000-000</span>
          </div>
          </div>
          
      </section>
      <footer className={styles.siteFooter}>
         &copy; {`${config.siteName} ${new Date().getFullYear()}`}
      </footer>
    </>
  )
}

export default Footer