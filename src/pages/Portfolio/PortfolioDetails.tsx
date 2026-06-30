import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import elenaHero from "../../assets/images/photo_5.jpg";
import sophiaHero from "../../assets/images/photo_4.jpg";
import gallery1 from "../../assets/images/photo_6.jpg";
import gallery2 from "../../assets/images/photo_2.jpg";
import img1 from "../../assets/images/photo_3.jpg";
import img2 from "../../assets/images/photo_10.jpg";
import img3 from "../../assets/images/photo_11.jpg";
  

import type { TimelineItem } from "../../components/portfolio/ProjectTimelineSection";
import ProjectHeroSection from "../../components/portfolio/ProjectHeroSection";
import ProjectStorySection from "../../components/portfolio/ProjectStorySection";
import ProjectTimelineSection from "../../components/portfolio/ProjectTimelineSection";
import ProjectGallerySection from "../../components/portfolio/ProjectGallerySection";
import PortfolioQuote from "../../components/portfolio/PortfolioQuote";
import PortfolioNavigation from "../../components/portfolio/PortfolioNavigation";

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

  nextWedding?: {
    title: string;
    slug:string;
  };

  previousWedding?:{
    title: string;
    slug: string;
  }
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
      { time: "08:00", title: "Bridal preparations", description: "Champagne breakfast and quiet rituals at the villa." },
      { time: "14:00", title: "Guest arrival", description: "Aperitivo on the terrace, string trio playing." },
      { time: "16:00", title: "Ceremony", description: "Vows under a cypress arch at the water's edge." },
       { time: "18:30", title: "Golden hour portraits", description: "Couple shoots along the lakeside paths." },
        { time: "20:00", title: "Dinner", description: "Six-course tasting menu, candlelit long tables." },
         { time: "23:00", title: "First dance & celebration", description: "Live band, sparkler send-off at midnight." },
    ],
    images: [ gallery2, elenaHero,img1,gallery1,sophiaHero, img2, img3 ],
     previousWedding:{
  title:"All Weddings",
  slug:""
},

    nextWedding:{
      title:"Sophia & James",
      slug:"sophia-james"
    },

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
    images: [gallery1, gallery2,img1, img2, elenaHero, sophiaHero],
    previousWedding:{
  title:"Elena & Marco",
  slug:"elena-marco"
},
    nextWedding:{
      title:"Amara & Noah",
      slug:"amara-noah",  
    },
  },
  // FIX: Converted key to URL slug match format "amara-noah"
  "amara-noah": {
    title: "Amara & Noah",
    location: "Santorini, Greece",
    year: "2024",
    heroImage: gallery1, // Swapped unique layout cover using existing image values
    tagline: "“Bougainvillea, sea breeze, and gold hour.”",
    storyText: "Perched beautifully over the Aegean cliffs, this architectural layout balanced pristine whitewashed minimalist backdrops with vibrant, sprawling structural floral expressions.",
    venue: "Rocabella Santorini",
    guests: "60 invited",
    duration: "Sunset soirée",
    timeline: [
      { time: "16:30", title: "Cliffside Guest Welcome", description: "Chilled signature mocktails with panoramic volcanic views." },
      { time: "18:00", title: "Sunset Vows", description: "An intimate dynamic exchange right against the horizon line." }
    ],
    images: [gallery1, gallery2,img1, img2, elenaHero, sophiaHero],
    previousWedding: {
    title: "Sophia & James",
    slug: "sophia-james",
  },
  nextWedding: {
    title: "Isla & Rhys",
    slug: "isla-rhys",
  },
  },
  // FIX: Converted key to URL slug match format "isla-rhys"
  "isla-rhys": {
    title: "Isla & Rhys",
    location: "Cotswolds, England",
    year: "2024",
    heroImage: gallery2, 
    tagline: "“An English garden in full bloom.”",
    storyText: "A quintessential country weekend focusing on nostalgic charm, custom canvas pavilions, artisanal table elements, and locally foraged seasonal wild flora compositions.",
    venue: "Euridge Manor",
    guests: "95 invited",
    duration: "Weekend stay",
    timeline: [
      { time: "10:00", title: "Morning Garden Walk", description: "Earl grey tea reception amidst wild estate florals." },
      { time: "14:30", title: "Orangery Ceremony", description: "Exchanging rings under historic crystal chandeliers." }
    ],
    images: [gallery1, gallery2,img1, img2, elenaHero, sophiaHero],
    previousWedding: {
    title: "Amara & Noah",
    slug: "amara-noah",
  },
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
      <PageTitle title={project.title}/>
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

      {/* Quite  */}

      <PortfolioQuote/>

      {/* navigation section  */}
     <PortfolioNavigation
  previousWedding={project.previousWedding}
  nextWedding={project.nextWedding}
/>
    </main>
  );
};

export default PortfolioDetails;