import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="title">
        <h2 className="curlybracket">
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
            Here are a few cutting-edge technologies I&apos;ve been passionately delving into
            lately:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">
              <Image src="/icon/LINUX.svg" alt="Linux" width={92.44} height={30} />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/REACT.svg" alt="React" width={92.45} height={30} />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/REACT-NATIVE.svg" width={151.16} height={30} alt="React-Native" />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/NEXT.svg" width={83.66} height={30} alt="Next Js" />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/JAVASCRIPT.svg" width={135.62} height={30} alt="Javascript" />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/TYPESCRIPT.svg" width={135.62} height={30} alt="Typescript" />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/HTML5.svg" alt="HTML" width={94.6} height={30} />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/CSS3.svg" alt="CSS" width={82.5} height={30} />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/SASS.svg" width={83.66} height={30} alt="SASS" />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/TAILWINDCSS.svg" width={148.65} height={30} alt="Tailwindcss" />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/GIT.svg" width={72.62} height={30} alt="GIT" />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/GITHUB.svg" width={102.35} height={30} alt="Github" />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/EXPRESSJS.svg" width={131.29} height={30} alt="Express Js" />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/NODEJS.svg" width={107.96} height={30} alt="Node Js" />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/MONGODB.svg" width={118.74} height={30} alt="MongoDB" />
            </li>
            <li className="about-grid-info-list-item">
              <Image src="/icon/FIREBASE.svg" width={116.88} height={30} alt="Firebase" />
            </li>
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
    </div>
  );
};

export default About;
