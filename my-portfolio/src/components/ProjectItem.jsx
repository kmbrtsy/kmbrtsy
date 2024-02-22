import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ProjectItem = ({ project }) => {
  const { title, description, image, link } = project;

  return (
    <Card>
      <CardActionArea component="a" href={  'https://mini-project2-cyan.vercel.app/'} target="_blank" rel="noopener noreferrer">
        <img src={`/images/${image}`} alt={title} 
        style={{ 
          width: '100%', 
          maxWidth:'700px', 
          height: 'auto', 
          }} />
        <CardContent style={{borderRadius: '30px'}}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectItem;
