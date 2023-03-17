import NavBar from '../components/NavBar'
import Head from 'next/head'
import styles from '@/styles/About.module.css'
import Footer from '../components/Footer'



export default function AboutUs(){
    return(
        <>
        <Head>
          <meta charset="utf-8"/>
          <title>About Us: Lodwar Galilee School</title>
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
          <meta property="og:title" content="Lodwar Galilee School"/>
          
          <meta property="og:description" content="Lorem ipsum dolor sit amet consectetur. Dictum nisl velit ultricies adipiscing. Porttitor et
              vitae in sit tellus iaculis felis aenean nascetur. Et praesent dictumst odio at. Viverra
              sagittis faucibus odio convallis. Tempor vulputate ut purus elementum elit. Semper
              aliquet et euismod sit sit justo. Hendrerit sit enim posuere et pellentesque scelerisqueid."/>
          <link rel="icon" href="/favicon.ico" />
      </Head>

    

      <section className={styles.container}>
           <div className={styles.topper}>
                <h1>About LGS</h1>
           </div>

           <div className={styles.abtContainer}>
                

                <p>
                  ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                </p>

                <div className={styles.abtImageDouble}>
                    <img src="/bg_5.jpg" alt="..."/>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                </p>

                
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                </p>
                <div className={styles.abtImageDouble}>
                    <img src="/c5.webp" alt="..."/>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                </p>



           </div>
           
        </section>
        <Footer/>
        </>
    )
}