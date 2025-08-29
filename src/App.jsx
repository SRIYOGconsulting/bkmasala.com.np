import './App.css';

function App() {
  const navbarStyle= {
    display: "flex",
    alignItems:"center",
    justifyContent: "space-between",
    padding: "10px 20px"
  }

  const navLinksStyle= {
    linkStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0
  }

  const linkStyle = {
    color: "black",
    textDecoration: "none"
  }

  return (
    <nav style={navbarStyle}>
      <ul style={navLinksStyle}>
        <div><a href="/" style={linkStyle}>Home</a></div>
        <div><a href="/about" style={linkStyle}>About Us</a></div>
        <div><a href="/history" style={linkStyle}>History</a></div>
        <div><a href="/faq" style={linkStyle}>FAQ</a></div>
        <div><a href="/gallery" style={linkStyle}>Gallery</a></div>
        <div><a href="/products" style={linkStyle}>Products</a></div>
        <div><a href="/contact" style={linkStyle}>Contact</a></div>
      </ul>
    </nav>
  );
}

export default App;
