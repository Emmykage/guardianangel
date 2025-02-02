
import Header from '../../components/header/Header'
import aboutImg from "../../assets/images/guardian-about.jpg"
import Footer from '../../components/footer/Footer'
const AboutUs = () => {
  return (
    <main>
      <Header/>
      <section className='px-4'>

   
        


        <div className='py-10 text-justify'>
        <h2 className='text-3xl font-medium text-center'>About Us </h2>


          <div className='grid sm:grid-cols-2 gap-5 m-auto max-w-7xl my-10'>
            <div>
                {/* <h2 className='text-3xl font-medium text-center'>About Us </h2> */}
              <p className='text-base my-4'>We are well over 12 solid years of commanding successful experience that is all about God's grace through dedicatedzeal, hard work and rewarding partners; Our future is ever green and properous with breakthroughs </p>
              <p>We are passionate, humble and always training resourceful to achieving our periodic targets with innovative discipleship leaders</p>
              {/* <p>We have </p> */}

            </div>
            <div>
              <div className='sm:h-[450px] rounded overflow-hidden '>
              <img src={aboutImg} alt="about school picture" className='w-full h-full' />

              </div>
            </div>
       
          </div>      


          <div className='grid sm:grid-cols-2 m-auto max-w-7xl gap-5 my-20'>
            <div className='order-2 '>
              <h3 className='text-3xl font-medium text-center'>Our Mission Statement</h3>
              <p>Weare with you always to bridge the GAP, of your not managing excellently success already gained by you</p>

            </div>
            <div>
              <div className='sm:h-[450px] rounded overflow-hidden '>
              <img src={aboutImg} alt="about school picture" className='w-full h-full' />

              </div>
            </div>
          </div>
          <div className='grid sm:grid-cols-2 max-w-7xl gap-5 m-auto'>

            <div>
              <h3 className='text-center text-3xl'>Our Strength</h3>
              <p>God almighty with our passionate service delivery to you as unto the lord</p>
            </div>
            <div>
              <div className='sm:h-[450px] rounded overflow-hidden '>
              <img src={aboutImg} alt="about school picture" className='w-full h-full' />

              </div>
            </div>

          </div>

          <div className='m-auto max-w-7xl grid sm:grid-cols-2 gap-5 my-10'>
            <div className='order-2 '>
              <h3  className='text-center font-medium text-3xl'>Our Core Value</h3>
              <p>Honesty and discipline in resources management while delivering quality and  with you always to bridge the GAP, of your not managing excellently success already gained by you</p>
            </div>
            <div>
              <div className='sm:h-[450px] rounded overflow-hidden '>
              <img src={aboutImg} alt="about school picture" className='w-full h-full' />

              </div>
            </div>
          </div>

          <div className='m-auto max-w-7xl my-5 grid gap-5 sm:grid-cols-2'>
                        

            <div>
              <h3 className='text-3xl text-center'>Our PAssionate Vision</h3>
              <p>Weare with you always to bridge the GAP, of your not managing excellently success already gained by you</p>
            </div>
            <div>
            <div className='sm:h-[450px] rounded overflow-hidden '>
              <img src={aboutImg} alt="about school picture" className='w-full h-full' />

              </div>              </div>


          </div>


        </div>
        </section>

        <Footer/>

    </main>
  )
}

export default AboutUs