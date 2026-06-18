import { Route,Routes} from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import PortfolioDetails from "../pages/Portfolio/PortfolioDetails";
import Journal from "../pages/journal/Journal";
import JournalDetails from "../pages/journal/JournalDetails";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<About/>}/>

        <Route path="/services" element={<Services/>}/>

        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="portfolio/:slug" element={<PortfolioDetails/>}/>

        <Route path="/journal" element={<Journal/>}/>
        <Route path="journal/:slug" element={<JournalDetails/>}/>

        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
        
    </Routes>
  );
}

export default AppRoutes
