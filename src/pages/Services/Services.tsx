import Hero from "../../components/servces/Hero"
import ServiceDetailsList from "../../components/servces/ServiceDetailsList"
import Investment from "../../components/servces/Investment"
import PageTitle from "../../components/PageTitle"

const Services = () => {
  return (
    <div>
      <PageTitle title="Services & Packages"/>
      <Hero/>
      <ServiceDetailsList/>
      <Investment/>
    </div>
  )
}

export default Services
