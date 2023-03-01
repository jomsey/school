import NavBar from '../components/NavBar'
import Head from 'next/head'
import styles from '@/styles/Accademics.module.css'
import Footer from '../components/Footer'


function Accademics() {
  return (
    <>
    <Head>
       <meta charset="utf-8"/>
       <title>Accademics: The Canopy School</title>
       <meta name="viewport" content="width=device-width, initial-scale=1"/>
       <meta name="description" content="Lorem ipsum dolor sit amet consectetur. Dictum nisl velit ultricies adipiscing. Porttitor et
         vitae in sit tellus iaculis felis aenean nascetur. Et praesent dictumst odio at. Viverra
         sagittis faucibus odio convallis. Tempor vulputate ut purus elementum elit. Semper
         aliquet et euismod sit sit justo. Hendrerit sit enim posuere et pellentesque scelerisqueid"/>
       <meta name="author" content="Muwanguzi Joseph"/>
       <meta name="copyright" content="Canopy School"/>
       <meta name="robots" content="index, follow"/>
       <meta name="rating" content="general"/>
       <meta property="og:type" content="website"/>
       <meta property="og:title" content="The Canopy School"/>
       <meta property="og:url" content="http(s)://www.thecanopyschool.com"/>
       <meta property="og:image" content="http(s)://www.thecanopyschool.com"/>
       <meta property="og:description" content="Lorem ipsum dolor sit amet consectetur. Dictum nisl velit ultricies adipiscing. Porttitor et
           vitae in sit tellus iaculis felis aenean nascetur. Et praesent dictumst odio at. Viverra
           sagittis faucibus odio convallis. Tempor vulputate ut purus elementum elit. Semper
           aliquet et euismod sit sit justo. Hendrerit sit enim posuere et pellentesque scelerisqueid."/>
       <link rel="icon" href="/favicon.ico" />
   </Head>
   

    <div className={styles.academics_landing}>
      <h1>Academics On The Canopy School</h1>
    </div>  
    <section className={styles.academicsContainer}>
       <div className={styles.group1}>
          <div className={styles.academImage1}>
            <img src="/bg_5.jpg" alt="..."/>
          </div>
          <div>
            <h2><span>Lorem</span> ipsum dolor sit.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores doloribus est veniam atque doloremque ipsa hic amet laboriosam. Autem laborum obcaecati dignissimos explicabo molestias expedita commodi modi alias reprehenderit!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores doloribus est veniam atque doloremque ipsa hic amet laboriosam. Autem laborum obcaecati dignissimos explicabo molestias expedita commodi modi alias reprehenderit!</p>
          </div>
       </div>

    </section>
    <section className={styles.goal}>
      <div className={styles.goalImage}>
      <img src="/bg_5.jpg" alt="..."/>
      </div>
      <div className={styles.goalText}>
        <h2>We add value to our kid's journey</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque debitis quis quisquam nisi quas eius, maiores velit vero quae consectetur, delectus porro reiciendis iusto nostrum libero sequi possimus praesentium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque cumque atque obcaecati maxime, provident ex temporibus vitae eligendi nesciunt ut enim ratione, magni dicta rerum? Eius non ipsam perferendis.</p>
      </div>
    </section>
    <section>
    <div className={styles.whyOutstanding}>
          
          <h2>Why Our Kids Are Outstanding?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt eos neque culpa illum quos eligendi quis alias, temporibus facilis at, ad porro nobis vero. Recusandae facere debitis tempora nobis!
          </p>

        <div className={styles.reasons}>
        <div className={styles.reason}>
            <span className={styles.badge}></span>
            <div>
            <h3>Lorem, ipsum dolor.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident blanditiis accusamus ducimus, voluptate iure fuga voluptatum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident blanditiis accusamus ducimus, voluptate iure fuga voluptatum.</p>
            </div>
          </div>

          <div className={styles.reason}>
            <span className={styles.badge}></span>
            <div>
            <h3>Lorem, ipsum dolor.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident blanditiis accusamus ducimus, voluptate iure fuga voluptatum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident blanditiis accusamus ducimus, voluptate iure fuga voluptatum.</p>
            </div>
          </div>
        </div>
      
     </div>
    </section>

    <section className={styles.expo}>
      <h2>Lorem ipsum dolor sit</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, neque. Enim possimus recusandae et ipsa dignissimos. Sit autem temporibus sint aspernatur illum ducimus assumenda consequuntur ipsa, fugit rerum, repudiandae placeat.</p>
      <div className={styles.pics}>
        <img src="/bg_5.jpg" alt="..."/>
       <img src="/bg_5.jpg" alt="..."/>
      

</div>
    </section>
   <Footer/>
   </>
  )
}

export default Accademics