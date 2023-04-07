import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Conteck from "./pages/conteck/Conteck";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Prodect from "./pages/home/Prodect";
import Details from "./pages/home/Details";
import Footer from "./components/Footer";
import AboutUs from "./pages/aboutus/AboutUs";
import Booking from "./pages/home/Booking";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catProdect/:category" element={<Prodect />} />
          <Route path="/prodect/:id" element={<Details />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/conteck" element={<Conteck />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
