import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="max-w-5xl my-0 mx-auto">
      <Navbar />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;