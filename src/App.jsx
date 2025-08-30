import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Index from "./pages/index";
import About from "./pages/about";
import History from "./pages/history";
import FAQ from "./pages/faq";
import Gallery from "./pages/gallery";
import Products from "./pages/products";
import Contact from "./pages/contact";
import ProductCategory from "./pages/product-category"; 

function App() {
  const navbarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
  };

  const navLinksStyle = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
  };

  const footerStyle = {
    padding: "20px",
    borderTop: "1px solid #ccc",
  };

  const footerHeadingStyle = {
    margin: 0,
    marginBottom: "10px",
    fontWeight: "bold",
  };

  return (
    <Router>
      {/* Navbar */}
      <nav style={navbarStyle}>
        <ul style={navLinksStyle}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/about" style={linkStyle}>About Us</Link></li>
          <li><Link to="/history" style={linkStyle}>History</Link></li>
          <li><Link to="/faq" style={linkStyle}>FAQ</Link></li>
          <li><Link to="/gallery" style={linkStyle}>Gallery</Link></li>

          {/* Products dropdown */}
          <li style={{ position: "relative" }}
              onMouseEnter={e => e.currentTarget.querySelector(".products-dropdown").style.display = "block"}
              onMouseLeave={e => e.currentTarget.querySelector(".products-dropdown").style.display = "none"}>
            <Link to="/products" style={linkStyle}>Products ▾</Link>
            <ul className="products-dropdown" style={{
              display: "none",
              position: "absolute",
              top: "100%",
              left: 0,
              backgroundColor: "white",
              border: "1px solid #ccc",
              listStyle: "none",
              padding: "0",
              margin: "0",
              minWidth: "150px",
              zIndex: 1000,
            }}>
              <li><Link to="/product-category/box" style={{...linkStyle, padding: "8px 16px", display: "block"}}>Box Spices</Link></li>
              <li><Link to="/product-category/pouch" style={{...linkStyle, padding: "8px 16px", display: "block"}}>Pouch Spices</Link></li>
              <li><Link to="/product-category/whole" style={{...linkStyle, padding: "8px 16px", display: "block"}}>Whole Spices</Link></li>
              <li><Link to="/product-category/other" style={{...linkStyle, padding: "8px 16px", display: "block"}}>Other Products</Link></li>
            </ul>
          </li>

          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>

          <li>
            <Link
              to="/order"
              style={{
                backgroundColor: "#e63946",
                color: "white",
                padding: "8px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#d62828"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#e63946"}
            >
              Order Online
            </Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-category/:category" element={<ProductCategory />} />
        <Route path="/contact" element={<Contact />} />

        {/* Product category routes */}
        <Route path="/product-category/:category" element={<ProductCategory />} />
      </Routes>

      {/* Footer */}
      <footer style={footerStyle}>
        <h4 style={footerHeadingStyle}>Browse More :</h4>
        <ul style={navLinksStyle}>
          <li><Link to="/blog" style={linkStyle}>Blog</Link></li>
          <li><Link to="/dealers" style={linkStyle}>Dealers</Link></li>
          <li><Link to="/history" style={linkStyle}>History</Link></li>
          <li><Link to="/recipe" style={linkStyle}>Recipe</Link></li>
          <li><Link to="/team" style={linkStyle}>Team</Link></li>
        </ul>
      </footer>
    </Router>
  );
}

export default App;
