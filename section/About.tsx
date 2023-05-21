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
              <Image
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                alt="React"
                width={92.45}
                height={30}
              />
            </li>
            <li className="about-grid-info-list-item">
              <Image
                src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                width={151.16}
                height={30}
                alt="React-Native"
              />
            </li>
            <li className="about-grid-info-list-item">
              <Image
                src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
                width={83.66}
                height={30}
                alt="Next Js"
              />
            </li>
            <li className="about-grid-info-list-item">
              <Image
                src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                width={135.62}
                height={30}
                alt="Javascript"
              />
            </li>
            <li className="about-grid-info-list-item">
              <Image
                src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                width={135.62}
                height={30}
                alt="Typescript"
              />
            </li>
            <li className="about-grid-info-list-item">
              <Image
                src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                alt="HTML"
                width={94.6}
                height={30}
              />
            </li>
            <li className="about-grid-info-list-item">
              <Image
                src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS"
                width={82.5}
                height={30}
              />
            </li>
            <li className="about-grid-info-list-item">
              <Image
                src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"
                width={83.66}
                height={30}
                alt="SASS"
              />
            </li>
            <li className="about-grid-info-list-item">
              <Image
                src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                width={148.65}
                height={30}
                alt="Tailwindcss"
              />
            </li>
            <li className="about-grid-info-list-item">
              <Image
                src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
                width={72.62}
                height={30}
                alt="GIT"
              />
            </li>
            <li className="about-grid-info-list-item">
              <Image
                src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                width={102.35}
                height={30}
                alt="Github"
              />
            </li>
            <li className="about-grid-info-list-item">
              <Image
                src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                width={131.29}
                height={30}
                alt="Express Js"
              />
            </li>
            <li className="about-grid-info-list-item">
              <Image
                src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                width={107.96}
                height={30}
                alt="Node Js"
              />
            </li>
            <li className="about-grid-info-list-item">
              <Image
                src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                width={118.74}
                height={30}
                alt="MongoDB"
              />
            </li>
            <li className="about-grid-info-list-item">
              <Image
                src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"
                width={116.88}
                height={30}
                alt="Firebase"
              />
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
