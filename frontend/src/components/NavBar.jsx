import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={navContainer}>
      <Link to="/" style={linkStyle}>
        <button style={navButton}>Home</button>
      </Link>
  
      <Link to="/projects" style={linkStyle}>
        <button style={navButton}>Projects</button>
      </Link>
      <Link to="/skills" style={linkStyle}>
        <button style={navButton}>Skills</button>
      </Link>
      <Link to="/contact" style={linkStyle}>
        <button style={navButton}>Contact Me</button>
      </Link>
    </div>
  );
}

export default NavBar;

const navContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100vw',
  backgroundColor: '#e000ff',
  border: '1px solid black',
  padding: '10px',
};

const navButton = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: 'blue',
  border: '1px solid black',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const linkStyle = {
  textDecoration: 'none',
}; 
