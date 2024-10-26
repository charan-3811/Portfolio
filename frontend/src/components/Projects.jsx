import { projects } from '../details'; 

function Projects() {
  return (
    <div style={containerStyle()}>
      <h2 style={titleStyle()}>Projects</h2>
      <div style={gridStyle()}>
        {projects.map((project, index) => (
          <div key={index} style={cardStyle()}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>
            <div style={linksContainerStyle()}>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={linkStyle()}>
                View Demo
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" style={linkStyle()}>
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

const containerStyle = () => ({
  padding: '20px',
  textAlign: 'center',
  backgroundColor: 'black',
  minHeight: '100vh',
  color:'white'
});

const titleStyle = () => ({
  fontSize: '2rem',
  marginBottom: '20px',
});

const gridStyle = () => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '20px',
});

const cardStyle = () => ({
  border:'solid white',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '15px',
  width: '300px',
  transition: 'transform 0.2s',
});

const linksContainerStyle = () => ({
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'space-between',
});

const linkStyle = () => ({
  textDecoration: 'none',
  color: '#4caf50',
  fontWeight: 'bold',
  transition: 'color 0.3s',
});
