import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#F8F6F2]">
      <Header/>
      
      <main>
        <Outlet/>
      </main>

      <Footer/>
    </div>
  )
}

export default Layout