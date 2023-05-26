import Image from 'next/image';
import React from 'react';

const About = () => {
  const techList = [
    { name: 'Linux', img: '/icon/LINUX.svg', width: 92.44 },
    { name: 'React', img: '/icon/REACT.svg', width: 92.45 },
    { name: 'React-Native', img: '/icon/REACT-NATIVE.svg', width: 151.16 },
    { name: 'Next.js', img: '/icon/NEXT.svg', width: 83.66 },
    { name: 'Javascript', img: '/icon/JAVASCRIPT.svg', width: 135.62 },
    { name: 'Typescript', img: '/icon/TYPESCRIPT.svg', width: 135.62 },
    { name: 'HTML', img: '/icon/HTML5.svg', width: 94.6 },
    { name: 'CSS', img: '/icon/CSS3.svg', width: 82.5 },
    { name: 'Bootstraps', img: '/icon/BOOTSTRAP.svg', width: 132.05 },
    { name: 'SASS', img: '/icon/SASS.svg', width: 83.66 },
    { name: 'Tailwindcss', img: '/icon/TAILWINDCSS.svg', width: 148.65 },
    { name: 'GIT', img: '/icon/GIT.svg', width: 72.62 },
    { name: 'Github', img: '/icon/GITHUB.svg', width: 102.35 },
    { name: 'Express.Js', img: '/icon/EXPRESSJS.svg', width: 131.29 },
    { name: 'Node.Js', img: '/icon/NODEJS.svg', width: 107.96 },
    { name: 'MongoDB', img: '/icon/MONGODB.svg', width: 118.74 },
    { name: 'Firebase', img: '/icon/FIREBASE.svg', width: 116.88 },
    { name: 'Vercel', img: '/icon/VERCEL.svg', width: 100.18 }
  ];

  return (
    <section className="about" id="about">
      <div className="title">
        <h2>
          <span>&#65371;</span> About Me <span>&#65373;</span>
        </h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, necessitatibus vel
            ipsum, minima delectus veniam quam deleniti qui quas sunt quis ex optio expedita
            deserunt aliquam labore aut, facilis quos.
          </p>

          <p className="about-grid-info-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, necessitatibus vel
            ipsum, minima delectus veniam quam deleniti qui quas sunt quis ex optio expedita
            deserunt aliquam labore aut, facilis quos.
          </p>

          <p className="about-grid-info-text">
            Here are a few cutting-edge technologies & tools I&apos;ve been passionately delving
            into lately:
          </p>
          <ul className="about-grid-info-list">
            {techList.map(({ name, img, width }) => (
              <li key={name} className="about-grid-info-list-item">
                <Image alt={name} src={img} width={width} height={30} />
              </li>
            ))}
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/ocitocit.png" alt="ocitocit" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
