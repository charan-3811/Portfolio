import { skills } from '../details';

function Skills() {
  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>Skills</h1>
      <div style={listStyle}>
        {skills.map((skill) => (
          <li key={skill.name} style={listItemStyle}>
            <p style={skillNameStyle}>{skill.name}</p>
            <img 
              src={`/${skill.img}`} 
              alt={skill.name} 
              style={iconStyle} 
            />
          </li>
        ))}
      </div>
    </section>
  );
}

export default Skills;

// Styles
const sectionStyle = {
  textAlign: 'center',
  margin: '20px',
  color: '#fff', // White text to contrast with black background
};

const headingStyle = {
  marginBottom: '20px',
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#1DA1F2', // Slightly blue heading for contrast
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const listItemStyle = {
  marginBottom: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px', // Space between text and icon
};

const skillNameStyle = {
  fontWeight: 'bold',
  fontSize: '18px',
  color: '#ccc', // Light grey for text to soften the contrast
};

const iconStyle = {
  width: '50px',
  height: '50px',
  objectFit: 'contain',
  transition: 'transform 0.3s, filter 0.3s',
};

iconStyle[":hover"] = {
  transform: 'scale(1.2)', // Slight zoom on hover
  filter: 'brightness(1.2)', // Make the icon a bit brighter on hover
};
