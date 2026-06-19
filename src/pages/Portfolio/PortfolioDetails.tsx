import { useParams } from "react-router-dom";


// Example Asset Imports (replace paths with your setup local references)
import elenaHero from "../../assets/images/elena-cover.jpg";
import sophiaHero from "../../assets/images/sophia-cover.jpg";
import gallery1 from "../../assets/images/photo_1.jpg";
import gallery2 from "../../assets/images/photo_2.jpg";
import type { TimelineItem } from "../../components/portfolio/ProjectTimelineSection";
import ProjectHeroSection from "../../components/portfolio/ProjectHeroSection";
import ProjectStorySection from "../../components/portfolio/ProjectStorySection";
import ProjectTimelineSection from "../../components/portfolio/ProjectTimelineSection";
import ProjectGallerySection from "../../components/portfolio/ProjectGallerySection";

interface ProjectData {
  title: string;
  location: string;
  year: string;
  heroImage: string;
  tagline: string;
  storyText: string;
  venue: string;
  guests: string;
  duration: string;
  timeline: TimelineItem[];
  images: string[];
}

const projectMockDatabase: Record<string, ProjectData> = {
  "elena-marco": {
    title: "Elena & Marco",
    location: "Lake Como, Italy",
    year: "2025",
    heroImage: elenaHero,
    tagline: "“A villa romance under cypress light.”",
    storyText: "We spent eighteen months designing this celebration with the couple — from the first conversation in our Paris studio to the final goodnight at the villa. The result was a three-day weekend that felt utterly theirs: tactile, slow, candlelit, and entirely free of spectacle.",
    venue: "Villa del Balbianello",
    guests: "86 invited",
    duration: "Three days",
    timeline: [
      { time: "11:00", title: "Bridal preparations", description: "Champagne breakfast and quiet rituals at the villa." },
      { time: "16:00", title: "Ceremony", description: "Vows under a cypress arch at the water’s edge." },
      { time: "20:00", title: "Dinner", description: "Six-course tasting menu, candlelit long tables." }
    ],
    images: [gallery1, gallery2, gallery1, gallery2]
  },
  "sophia-james": {
    title: "Sophia & James",
    location: "Provence, France",
    year: "2024",
    heroImage: sophiaHero,
    tagline: "“Lavender fields and a candlelit chateau.”",
    storyText: "Set deep in the heart of Provence, this celebration focused heavily on raw organic textures, architectural styling, and an open-air banquet under a canopy of thousands of twinkling fairy lights.",
    venue: "Château de Tourreau",
    guests: "120 invited",
    duration: "Two days",
    timeline: [
      { time: "12:00", title: "Pre-wedding pool lunch", description: "Fresh lavender cocktails and organic seasonal bites." },
      { time: "17:00", title: "Chateau vows courtyard", description: "Exchange of rings backed by historic classical masonry." }
    ],
    images: [gallery2, gallery1, gallery2, gallery1]
  }
};

const PortfolioDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  // Extract matched payload or fallback cleanly to default project row
  const project = slug && projectMockDatabase[slug] 
    ? projectMockDatabase[slug] 
    : projectMockDatabase["elena-marco"];

  return (
    <main className="bg-[#FAF6EE] min-h-screen antialiased">
      {/* 1. Dynamic Hero Stage Section Header */}
      <ProjectHeroSection 
        title={project.title}
        location={project.location}
        year={project.year}
        heroImage={project.heroImage}
      />

      {/* 2. Story Specs Paragraph Layout */}
      <ProjectStorySection
        tagline={project.tagline}
        storyText={project.storyText}
        venue={project.venue}
        guests={project.guests}
        duration={project.duration}
      />

      {/* 3. Schedule Content List Rows */}
      <ProjectTimelineSection items={project.timeline} />

      {/* 4. Fine Art Portfolio Layout Image Blocks */}
      <ProjectGallerySection images={project.images} />
    </main>
  );
};

export default PortfolioDetails;