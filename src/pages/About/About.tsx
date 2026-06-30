import Stats from "../../components/home/Stats"
import Atelier from "../../components/about/Atelier"
import Philosophy from "../../components/about/Philosophy"
import Team from "../../components/about/Team"
import PageTitle from "../../components/PageTitle"

const About = () => {
  return (
    <div>
     <PageTitle title="The Atelier"/>
      <Atelier/>
      <Philosophy/>
      <Team/>
      <Stats/>
    </div>
  )
}

export default About
