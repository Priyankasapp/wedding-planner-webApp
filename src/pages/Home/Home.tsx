
import Intro from "../../components/home/Intro";
import Services from "../../components/home/Services";
import Portfolio from "../Portfolio/Portfolio";
import Stats from "../../components/home/Stats";
import Process from "../../components/home/Process";
import Testimonial from "../../components/home/Testimonial";
import Gallery from "../../components/home/Gallery";
import CTA from "../../components/home/CTA";
import Hero from "../../components/home/Hero";
import FeaturedWeddings from "../../components/home/FeaturedWeddings";
const Home = () => {
  return (
     <>
      <Hero />
      <Intro />
      <Services />
      <FeaturedWeddings/>
      <Portfolio />
      <Stats />
      <Process />
      <Testimonial />
      <Gallery />
      <CTA />
    </>
  )
}

export default Home