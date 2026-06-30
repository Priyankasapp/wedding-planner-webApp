import { Hero } from "../../components/journal/Hero"
import JournalFeatured from "../../components/journal/JournalFeatured"
import JournalGrid from "../../components/journal/JournalGrid"
import PageTitle from "../../components/PageTitle"
const Journal = () => {
  return (
    <div>
      <PageTitle title="Journal"/>
      <Hero/>
      <JournalFeatured/>
      <JournalGrid/>
    </div>
  )
}

export default Journal;