
import Intro from "../../components/home/Intro";
import Services from "../../components/home/Services";
import Stats from "../../components/home/Stats";
import Process from "../../components/home/Process";
import Testimonial from "../../components/home/Testimonial";
import Hero from "../../components/home/Hero";
import FeaturedWeddings from "../../components/home/FeaturedWeddings";
import Moments from "../../components/home/Moments";
import Begin from "../../components/home/Begin";

const Home = () => {
  return (
     <>
      <Hero />
      <Intro />
      <Services />
      <FeaturedWeddings/>
      <Stats />
      <Process />
      <Testimonial />
     <Moments/>
    <Begin/>
   
     
    </>
  )
}

export default Home