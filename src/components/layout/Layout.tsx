import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F2]">
        <ScrollToTop />
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;