

import { Link } from "react-router-dom";

interface PortfolioNavigationProps {
  nextWedding?: {
    title: string;
    slug: string;
  };

  previousWedding?: {
    title: string;
    slug: string;
  };
}

const PortfolioNavigation = ({
  nextWedding,
  previousWedding,
}: PortfolioNavigationProps) => {
  return (
    <section className="bg-[#F5F3EF] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-8">
        
        <div className="flex flex-col md:flex-row item-start">
          {previousWedding && (
            <Link
              to={`/portfolio/${previousWedding.slug}`}
              className="uppercase tracking-[0.35em] text-xs text-[#C9A86A]"
            >
              ← {previousWedding.title}
            </Link>
          )}
        </div>

        <div className="text-right">
          {nextWedding && (
            <>
              <p className="uppercase tracking-[0.35em] text-xs text-[#C9A86A] mb-4">
                Next Wedding
              </p>

              <Link
                to={`/portfolio/${nextWedding.slug}`}
                className="group inline-flex items-center gap-4"
              >
                <span
                className="text-xl md:text-3xl italic text-[#3A2A24]"
                style={{
                    fontFamily:'"Cormorant Garamond", serif'
                }}>
{nextWedding.title}
                </span>
                
                <span className="text-2xl text-[#3A2A24] transition-transform group-hover:translate-x-1">
                 →
               </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioNavigation;