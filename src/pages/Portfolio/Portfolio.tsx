import PageTitle from "../../components/PageTitle";
import { Hero } from "../../components/portfolio/Hero";
import { PortfolioGrid } from "../../components/portfolio/PortfolioGrid";
const Portfolio = () => {
  return (
    <div>
      <PageTitle title="Portfolio" />
      <Hero />
      <PortfolioGrid />
    </div>
  );
};

export default Portfolio;
