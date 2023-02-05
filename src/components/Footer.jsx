import Link from 'next/link'
import styles from "@/styles/Footer.module.css"

function Footer() {
  return (
    <>
     <section className={styles.bottomNav}>
          <div className={styles.badge}>
              <img src="/badge.png" />
          </div>

          <div className={styles.linksContainer}>

                <div className={styles.links}>
                    <h4>Main Links</h4>
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/">About Us</Link></li>
                      <li><Link href="/">Accademics</Link></li>
                      <li><Link href="/">Blog</Link></li>
                      <li><Link href="/">Contact Us</Link></li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <h4>Other Links</h4>
                    <ul>
                      <li><Link href="/">Link 1</Link></li>
                      <li><Link href="/">Link 2</Link></li>
                      <li><Link href="/">Link 3</Link></li>
                      <li><Link href="/">Link 4</Link></li>
                      <li><Link href="/">Link 5</Link></li>
                     
                    </ul>

                </div>
          </div>
          <div className={styles.contacts}>
            <h4>Contacts</h4>
            {/* <div className={styles.socialPack}>
                <i class="fa fa-facebook-official"></i>
                <i class="fa fa-twitter"></i>
                <i class="fa fa-linkedin"></i>
              </div>
                <br/> */}
                <span>+254-000-000-000</span>
                <br/>
                <span>+254-111-000-000</span>
          </div>
      </section>
      <footer className={styles.siteFooter}>
         &copy; The Canopy School 2023
      </footer>
    </>
  )
}

export default Footer