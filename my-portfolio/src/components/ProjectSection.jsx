import React from 'react'
import Grid from '@mui/material/Grid';
import ProjectItem from './ProjectItem';

const ProjectSection = () => {

  const projects = [
    { id: 1, title: 'Project 1', description: 'Description for Project 1', image: 'ecom-app.png', link: 'https://mini-project2-cyan.vercel.app/' },
    { id: 2, title: 'Project 2', description: 'Description for Project 2', image: 'ecom-app.png' },
  ];

  return (
    <div className='works-container' 
         style={{ 
          height: '450px', 
          paddingTop: '70px'
          }}> 
      <div className='sample-projects'>
            <div className="horizontal-line-left" style={{ width: '50px !important' }}></div>
              <h2 className="works-title">SOME OF MY WORKS</h2>
            <div className="horizontal-line-right" style={{ width: '50px !important' }}></div>
      </div>

      <div id='project-section' className='project-container'>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid key={project.id} item xs={12} sm={6} md={6}>
              <ProjectItem project={project} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default ProjectSection
