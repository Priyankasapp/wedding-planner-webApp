import ContactHero from "../../components/contact/ContactHero"
import ContactFormSection from "../../components/contact/ContactFormSection"
import ContactMap from "../../components/contact/ContactMap"
import ContactFAQ from "../../components/contact/ContactFAQ"
import PageTitle from "../../components/PageTitle"

const Contact = () => {
  return (
    <div>
      <PageTitle title="Enquiries"/>
      <ContactHero/>
      <ContactFormSection/>
      <ContactMap/>
      <ContactFAQ/>
    </div>
  )
}

export default Contact
