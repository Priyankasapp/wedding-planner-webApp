import { Hero } from "../../components/journal/Hero"
import JournalFeatured from "../../components/journal/JournalFeatured"
import JournalGrid from "../../components/journal/JournalGrid"
const Journal = () => {
  return (
    <div>
      <Hero/>
      <JournalFeatured/>
      <JournalGrid/>
    </div>
  )
}

export default Journal;