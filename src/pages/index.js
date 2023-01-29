import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Review from '../components/Review'
import NavBar from '../components/NavBar'
import Gallery from '../components/Gallery'
import Service from '../components/Service'
import styles from '@/styles/Home.module.css'
import galleryImages from '../utils/gallery-images'
import { Swiper, SwiperSlide } from 'swiper/react';
import servicesOffered from '../utils/services-offered'
import { Navigation, Pagination} from 'swiper';


export default function Home() {
  
  return (
    <>
      <Head>
          <meta charset="utf-8"/>
          <title>The Canopy School</title>
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
     <NavBar/>
      <section className={styles.landing}>
          <div className={styles.intro}>
              <h1>Welecome To <br/>The <span>Canopy School</span></h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
              </p>
              <button>Contact Us</button>
          </div>
          <div className="landingImage">
              <img src="/children-7339441_1920.jpg" />
          </div>
      </section>

      <section className={styles.schoolServices}>
            <h2><span>What</span> We Offer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
            </p>

            <div  className={styles.services}>
              {servicesOffered.map(({name,description,bg,id})=>
                    <Service name={name} 
                            desc={description} 
                            bg={bg} 
                            key={id}
                    />
              )}
            </div>
      </section>

      <section className={styles.mission}>
            <h2>Nurturing Your Child</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
            </p>
      </section>

      <section className={styles.gallery}>
            <h2><span>Our</span> Photos Gallery</h2>
            <Gallery 
              galleryID="gallery"
              images={galleryImages}/>
      </section>

      <section className={styles.vision}>
          <h2><span>Our </span>Vision</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
          </p>
      </section>

      <section className={styles.aboutUsContainer} >
        <h2><span>About</span> Us</h2>
        <div className={styles.aboutUs}>
            <div className={styles.aboutUsText}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                  </p>
            </div>

            <div className={styles.aboutUsImage} >
                  <img src="/bg_5.jpg"/>
            </div>
        </div>
      </section>

      <section className={styles.reviews}>
          <h2><span>Reviews</span> From  Community</h2>

          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
          </p>

          <div className={styles.reviewsSlider}>
              <Swiper spaceBetween={50}
                     
                      navigation={true}
                      loop={true}
                      modules={[Navigation, Pagination]}
                      breakpoints={{
                                      640: {
                                        slidesPerView: 1,
                                    
                                      },
                                      768: {
                                        slidesPerView: 2,
                                      
                                      },
                                      1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                      },
                                    }}
                      >
                    <SwiperSlide><Review/></SwiperSlide>
                    <SwiperSlide><Review/></SwiperSlide>
                    <SwiperSlide><Review/></SwiperSlide>
                    <SwiperSlide><Review/></SwiperSlide>
                    <SwiperSlide><Review/></SwiperSlide>
                    <SwiperSlide><Review/></SwiperSlide>
                    <SwiperSlide><Review/></SwiperSlide>
                    <SwiperSlide><Review/></SwiperSlide>
              </Swiper>
          </div>
      </section>

      <section className={styles.contactUs}>
          <div className={styles.messageContainer}>
              <h3>Leave Us a Message</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur</p>
              
              <form method="POST">
                  <input type="text" name="name" placeholder="Name"/>
                  <input type="email" name="email"  placeholder="Email"/>
                  <textarea placeholder="Message" rows="6" ></textarea>
                  <button type="submit">Send Message</button>
              </form>
            </div>
      </section>

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
