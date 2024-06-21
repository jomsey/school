import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from 'next/head'
import Image from 'next/image'
import Review from '../components/Review'
import Gallery from '../components/Gallery'
import Service from '../components/Service'
import styles from '@/styles/Home.module.css'
import galleryImages from '../utils/gallery-images'
import { Swiper, SwiperSlide } from 'swiper/react';
import servicesOffered from '../utils/services-offered'
import { Navigation, Pagination,Autoplay} from 'swiper';
import React from 'react';
import sendMessage from '../services/http-service';
import Footer from '../components/Footer';
import config  from 'jsconfig.json';


export default function Home() {
  const [formData,setFormData] = React.useState({})

  const handleMessageSend= async e=>{
        e.preventDefault()
        const res =  sendMessage(formData)
 
  }

  const handleChange =e=>{
        const name = event.target.name;
        const value = event.target.value;
        setFormData(values => ({...values, [name]: value}))

  }
 

  return (
    <>
      <Head>
          <meta charset="utf-8"/>
          <title>{config.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="description" content="Lorem ipsum dolor sit amet consectetur. Dictum nisl velit ultricies adipiscing. Porttitor et
            vitae in sit tellus iaculis felis aenean nascetur. Et praesent dictumst odio at. Viverra
            sagittis faucibus odio convallis. Tempor vulputate ut purus elementum elit. Semper
            aliquet et euismod sit sit justo. Hendrerit sit enim posuere et pellentesque scelerisqueid"/>
          <meta name="author" content="Muwanguzi Joseph"/>
          <meta name="copyright" content={config.siteName}/>
          <meta name="robots" content="index, follow"/>
          <meta name="rating" content="general"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={config.siteName}/>
          <meta property="og:url" content={config.siteName}/>
          <meta property="og:image" content={config.siteName}/>
          <meta property="og:description" content="Lorem ipsum dolor sit amet consectetur. Dictum nisl velit ultricies adipiscing. Porttitor et
              vitae in sit tellus iaculis felis aenean nascetur. Et praesent dictumst odio at. Viverra
              sagittis faucibus odio convallis. Tempor vulputate ut purus elementum elit. Semper
              aliquet et euismod sit sit justo. Hendrerit sit enim posuere et pellentesque scelerisqueid."/>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.landing}>
          <div className={styles.intro}>
              <h1>Welcome To <br/>{config.siteName?.split(" ")[0]} <span>{config.siteName?.split(" ").slice(1).join(" ")}</span></h1>
              <p>A place where learning is an adventure and excellence is an a habit.</p>
          </div>
          <div className={styles.landingImage}>
                <Image
                   src="/children-7339441_1920.jpg" 
                   width={1000}
                   height={700}
                   alt='..........'
                />
          </div>
      </section>
      <section className={styles.aboutUsContainer} >
        <div className={styles.aboutUs}>
            <div className={styles.aboutUsText}>
            <h2><span>About</span> Us</h2>

                  <p>
                    At {config.siteName}, we believe in the holistic development of our students. Our comprehensive curriculum is designed to challenge and inspire, ensuring that each child can achieve their fullest potential.We are dedicated to fostering ana environment where students can explore their passion,develop  critical thinking skills and grow into well-rounded individuals. Beyond academics , we offer a variety of extracurricular activities, including sports , arts, and clubs, allowing students to discover and cultivate their talents and interests.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
                  </p>

                  <button>Read More</button>
            </div>

            <div className={styles.aboutUsImage} >
                  <Image alt="....."
                   width={600}
                   height={600}
                   src="/c3.jpg"/>
                  
            </div>
        </div>
      </section>
     
      <section className={styles.base}>
        <div><h2>FIND RIGHT EDUCATION FOR YOUR KID</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, maxime. Veritatis suscipit non, officia praesentium vero sint harum deleniti corrupti autem, tempora ut voluptates!</p>
        </div>
        <Image src="/c1.jpg" alt="...." width={1200} height={500}/>
      </section>

      <section className={styles.mission}>
            <h2>Nurturing Your Child</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
            </p>
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
      <section className={styles.beta}>
         <div>
         <h2>EDUCATION IS THE MOST POWERFUL WEAPON</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, maiores? Reiciendis, eligendi illum. Sint ea ad nisi? Magni, reprehenderit dicta iste voluptate, dolore quam magnam minima corporis tenetur expedita molestiae.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, maiores? Reiciendis, eligendi illum. Sint ea ad nisi? Magni, reprehenderit dicta iste voluptate, dolore quam magnam minima corporis tenetur expedita molestiae.</p>
          <button>Learn More</button>
         </div>
         <div className={styles.images}>
         <Image alt="....."
                   width={600}
                   height={600}
                   src="/c3.jpg"/><Image alt="....."
                   width={600}
                   height={600}
                   src="/c1.jpg"/><Image alt="....."
                   width={600}
                   height={600}
                   src="/c2.jpg"/>
         </div>
      </section>
      <section className={styles.gallery}>
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

      

      <section className={styles.reviews}>
          <h2><span>Reviews</span> From  Parents</h2>

          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur molestias id totam iste! Autem, libero?
          </p>

          <div className={styles.reviewsSlider}>
              <Swiper spaceBetween={50}
                      navigation={true}
                      loop={true}
                      autoplay={{
                                delay:3000,
                                pauseOnMouseEnter:true,
                                disableOnInteraction:false
                      }}
                      modules={[Navigation, Pagination,Autoplay]}
                      breakpoints={{
                                      640: {
                                        slidesPerView: 1,
                                    
                                      },
                                      768: {
                                        slidesPerView: 2,
                                      
                                      },
                                      1024: {
                                        slidesPerView: 3,
                                       
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

      <section id ="contact" className={styles.contactUs}>
          <div className={styles.messageContainer}>
              <h3>Let Us Know How We Can Help</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis hic ratione, deserunt aperiam nostrum quam quis impedit delectus sunt ipsam saepe amet consectetur</p>
              
              <form method="POST">
                  <input type="text" onChange={handleChange} name="name" placeholder="Name"/>
                  <input type="email"onChange={handleChange} name="email"  placeholder="Email"/>
                  <textarea  onChange={handleChange} name="message" placeholder="Message" rows="6" ></textarea>
                  <button type="submit" onClick={handleMessageSend}>Send Message</button>
              </form>
            </div>
      </section>

     <Footer/>
    </>
  )
}
