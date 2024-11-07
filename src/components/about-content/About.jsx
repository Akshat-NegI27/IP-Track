import React from 'react';
import './About.css';  // Page-specific styles for the About page
import aru from '../../img/aru.png';
import aky from '../../img/aky.png';
import shr from '../../img/shr.png';
import ame from '../../img/ame.png';


function scrollToProfile(index) {
  document.getElementById(`profile-${index}`).scrollIntoView({ behavior: 'smooth', block: 'center'  });
}

function Content() {
  const profiles = [
    { name: 'Akshat Negi', role: 'Developer', img: aky, email: 'akshatnegiarchit272003@gmail.com', linkedin: 'https://www.linkedin.com/in/me-akshat-negi/', projects: 'https://github.com/Akshat-NegI27' },
    { name: 'Ameya Taneja', role: 'Full-Stack Developer', img: ame, email: 'ameyataneja1302@gmail.com', linkedin: 'https://www.linkedin.com/in/ameyataneja/', projects: 'https://github.com/realTNEU' },
    { name: 'Arush Dubey', role: 'FrontEnd Developer', img: aru, email: 'arushdubey360@gmail.com', linkedin: 'https://www.linkedin.com/in/arush-dubey-358840244/', projects: 'http://github.com/ADIR360?tab=repositories' },
    { name: 'Shreyanshi Dobhal', role: 'DataBase Manager', img: shr, email: 'example@example.com', linkedin: '#', projects: '#' }

  ];

  return (
    <div className="about-page-container">
      <div className="about-container">
        <div className="content">
          <h1 className="top-heading">ABOUT TEAM</h1>
        </div>
      </div>

      {/* Cards at the top */}
      <div className="about-cards-row">
        {profiles.map((profile, index) => (
          <div className="about-column" key={index}>
            <div className="about-card">
              <img 
                src={profile.img} 
                alt={profile.name} 
                className="about-card-img" 
                onClick={() => scrollToProfile(index)} 
              />
              <div className="about-card-container">
                <h2>{profile.name}</h2>
                <p className="about-card-title">{profile.role}</p>
                <p>{profile.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Profile containers */}
      <div className='about-content'>
        {profiles.map((profile, index) => (
          <div className='about-profile' id={`profile-${index}`} key={index}>
            <main className="about-main">
              <div className="about-top">
                <h1>This is</h1>
                <h3>{profile.name}</h3>
                <h4>{profile.role}</h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quod repellendus deserunt quos, officiis quo quaerat molestiae libero, nostrum tenetur voluptas, rerum vitae perspiciatis fuga aspernatur accusantium qui illum laudantium.s {profile.role}s for this project</p>
              </div>
              <div className='about-buttons'>
                <a href={profile.linkedin} className="about-cta about-hire">LinkedIn</a>
                <a href={profile.projects} className="about-cta about-project">SEE MY PROJECTS</a>
              </div>
            </main>
            <figure className="about-figure">
              <img src={profile.img} alt={profile.name} className='about-img' width={350} />
              <div className='about-img-bg'></div>
            </figure>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Content;
