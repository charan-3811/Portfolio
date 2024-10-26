import { personalDetails } from "../details";
import { useState } from "react";

function ContactMe() {
  const [message, setMessage] = useState("");

  const handleChange = (e) => setMessage(e.target.value);

  const handleSendEmail = () => {
    if (message.trim()) {
      window.open(
        `mailto:${personalDetails.email}?subject=Message from Website&body=${encodeURIComponent(message)}`
      );
      setMessage(""); // Clear message after sending
    } else {
      alert("Please enter a message before sending.");
    }
  };

  return (
    <>
      <h1 style={headingStyle}>Contact Me</h1>

      <div style={iconContainer}>
        <a
          href={personalDetails.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...iconLinkStyle, "--hover-color": "blue" }}
        >
          <img src="/images/linkedin.png" alt="LinkedIn Icon" style={iconStyle} />
        </a>
        <a
          href={personalDetails.instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...iconLinkStyle, "--hover-color": "red" }}
        >
          <img src="/images/instagram.png" alt="Instagram Icon" style={iconStyle} />
        </a>
      </div>

      <p style={textStyle}>Phone: {personalDetails.phone}</p>
      <p style={textStyle}>
        Email: <a href={`mailto:${personalDetails.email}`} style={linkStyle}>{personalDetails.email}</a>
      </p>
      

      <textarea
        value={message}
        onChange={handleChange}
        placeholder="Type your message here..."
        style={textAreaStyle}
      />
      <button onClick={handleSendEmail} style={buttonStyle}>Send Message</button>
    </>
  );
}

export default ContactMe;

const headingStyle = {
  color: "#fff",
  textAlign: "center",
  marginBottom: "20px",
};

const iconContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginBottom: "20px",
};

const iconStyle = {
  width: "40px",
  height: "40px",
  objectFit: "contain",
  transition: "transform 0.3s, filter 0.3s",
};

const iconLinkStyle = {
  display: "inline-block",
  ":hover img": {
    transform: "scale(1.1)",
    filter: "brightness(0) saturate(100%) var(--hover-color)",
  },
};

const textStyle = {
  color: "#ccc",
  textAlign: "center",
  marginBottom: "10px",
};

const linkStyle = {
  color: "#1DA1F2",
  textDecoration: "none",
};

const textAreaStyle = {
  width: "80%",
  height: "100px",
  margin: "10px auto",
  display: "block",
  padding: "10px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid #555",
  backgroundColor: "#222",
  color: "#fff",
  resize: "none",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#1DA1F2",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
  display: "block",
  margin: "auto",
  transition: "background-color 0.3s",
};

buttonStyle[":hover"] = {
  backgroundColor: "#0d8bf2",
};
