// src/components/Home.js
import { personalDetails } from "../details";

function Home() {
  return (
    <div style={containerStyle}>
      <h1 style={nameStyle}>{personalDetails.name}</h1>
      <p style={descriptionStyle}>{personalDetails.description}</p>
      <p style={contactStyle}>
        You can reach me directly at{" "}
        <a href={`mailto:${personalDetails.email}`} style={emailLinkStyle}>
          {personalDetails.email}
        </a>
      </p>
      <a href="/resume.pdf" download style={resumeButtonStyle}>
        Download Resume
      </a>
    </div>
  );
}

export default Home;

// Inline styles
const containerStyle = {
  backgroundColor: "#000", // Black background
  color: "#fff", // White text for good contrast
  height: "100vh", // Full page height
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  textAlign: "center",
};

const nameStyle = {
  fontSize: "36px",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#1DA1F2", // Slightly blue for highlighting the name
};

const descriptionStyle = {
  fontSize: "18px",
  marginBottom: "20px",
  color: "#ccc", // Light grey for description
};

const contactStyle = {
  fontSize: "16px",
  color: "#fff", // White for better visibility
};

const emailLinkStyle = {
  color: "#1DA1F2", // Blue link
  textDecoration: "none",
  fontWeight: "bold",
};

const resumeButtonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#1DA1F2", // Blue background
  color: "#fff", // White text
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  textDecoration: "none",
  fontSize: "16px",
  transition: "background-color 0.3s",
};

resumeButtonStyle[":hover"] = {
  backgroundColor: "#0d8bf2", // Darker blue on hover
};
