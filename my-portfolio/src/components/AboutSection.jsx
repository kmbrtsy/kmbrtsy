import React from 'react'

const AboutSection = () => {
  const handleDownload = () => {
    const pdfFile = './public/My-Resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = pdfFile;
    anchor.download = 'Kimmy-Resume.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };


  return (
    <div id='about-section' className="about-container">
      <div className="about-content">
      <div className="picture">
          <img src="./images/kim-img.jpg" alt="Your Photo" />
        </div>
        <div 
        className="description"
        style={{
          fontFamily: 'Poppins, serif',
        }}>
          <h2 style={{fontSize: '36px'}}>ABOUT ME</h2>
          <h3>
          Hello! I am Kimberly Cordero
          </h3>
          <p>
          I am deeply committed to create outstanding software that enhances the lives of others around me. I specialize in developing websites and software for clients ranging from individuals, small enterprises to huge corporations. Making Ideas to reality.
          </p>
          <button onClick={handleDownload}>Download PDF</button>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
