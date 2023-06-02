'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Work = () => {
  const projectsData = [
    {
      image: '/note-app.png',
      projectName: 'Note App',
      projectDescription:
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
      projectTech: [
        { name: 'Node.js', img: '/icon/NODEJS.svg', widht: 107.96 },
        { name: 'Express.js', img: '/icon/EXPRESSJS.svg', widht: 131.29 },
        { name: 'MongoDB', img: '/icon/MONGODB.svg', widht: 118.74 },
        { name: 'Typescript', img: '/icon/TYPESCRIPT.svg', widht: 135.62 },
        { name: 'React', img: '/icon/REACT.svg', widht: 92.45 },
        { name: 'Bootstrap', img: '/icon/BOOTSTRAP.svg', widht: 132.05 }
      ],
      projectExternalLinks: {
        github: 'https://github.com/ocitocit/MERN-NotesApp',
        externalLink: ''
      }
    },
    {
      image: '/clone-chatgpt.png',
      projectName: 'Clone ChatGPT',
      projectDescription:
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
      projectTech: [
        { name: 'Next.js', img: '/icon/NEXT.svg', widht: 83.66 },
        { name: 'React', img: '/icon/REACT.svg', widht: 92.45 },
        { name: 'Tailwindcss', img: '/icon/TAILWINDCSS.svg', widht: 148.65 },
        { name: 'Firebase', img: '/icon/FIREBASE.svg', widht: 116.88 },
        { name: 'OpenAI', img: '/icon/OPENAI.svg', widht: 107.96 },
        { name: 'Vercel', img: '/icon/VERCEL.svg', widht: 100.18 }
      ],
      projectExternalLinks: {
        github: 'https://github.com/ocitocit/clone-chatgpt',
        externalLink: 'https://chatgpt.ocitocit.xyz'
      }
    }
  ];

  return (
    <section className="works" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 }
        }}
      >
        <h2>
          <span>&#65371;</span> Some Things I&apos;ve Built <span>&#65373;</span>
        </h2>
      </motion.div>
      <div className="works-container">
        {projectsData.map(
          ({ image, projectDescription, projectExternalLinks, projectName, projectTech }) => {
            return (
              <motion.div
                className="work"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 }
                }}
              >
                <div className="work-image">
                  <div className="work-image-overlay"></div>
                  <div className="work-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="work-info">
                  <p className="work-info-overline">Featured Project</p>
                  {projectExternalLinks.externalLink ? (
                    <Link className="link" href={projectExternalLinks.externalLink} target="_blank">
                      <h3 className="work-info-title">{projectName}</h3>
                    </Link>
                  ) : (
                    <Link className="link" href={projectExternalLinks.github} target="_blank">
                      <h3 className="work-info-title">{projectName}</h3>
                    </Link>
                  )}
                  <div className="work-info-description">
                    <p>{projectDescription}</p>
                  </div>

                  <ul className="work-info-tech-list">
                    {projectTech.map(({ name, img, widht }) => (
                      <li className="work-info-tech-list-item" key={name}>
                        <Image src={img} alt={name} width={widht} height={30} />
                      </li>
                    ))}
                  </ul>
                  <ul className="work-info-liks">
                    <li className="work-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="work-info-links-item-link"
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                  </ul>
                  {projectExternalLinks.externalLink && (
                    <ul className="work-info-liks">
                      <li className="work-info-links-item">
                        <Link
                          href={projectExternalLinks.externalLink}
                          className="work-info-links-item-link"
                          target="_blank"
                        >
                          <FiExternalLink />
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Work;
