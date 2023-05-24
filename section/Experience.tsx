'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Experience = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>('.underline');
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: 'Upwork',
      role: 'Freelancer',
      url: 'https://www.upwork.com/freelancers/~010170582218715692?viewMode=1',
      start: 'August 2021',
      end: 'Present',
      shortDescription: [
        "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js among others."
      ]
    },
    {
      name: 'Titik Terang Kreatif',
      role: 'SEO Specialist',
      url: 'https://id.linkedin.com/company/titik-terang-kreatif',
      start: 'June 2022',
      end: 'Present',
      shortDescription: [
        'Posting the content provided by the content writer',
        'Registering and maintaining website traffic on Google Search Console.'
      ]
    },
    {
      name: 'IGM',
      role: 'Staff Production',
      url: 'https://www.linkedin.com/in/indoherb-global-manufacture-b29817241/',
      start: 'April 2021',
      end: 'May 2022',
      shortDescription: [
        'Produce a good quality of Herbal Medicine using GMP(Good Manufacturing Process)'
      ]
    },
    {
      name: 'Personal Quail Farm',
      role: 'Business Owner',
      url: 'https://puyuh-adel.business.site/',
      start: 'January 2016',
      end: 'October 2022',
      shortDescription: [
        'Maintain Health and eggs production of quail.',
        'Feeding, collecting eggs and selling an eggs'
      ]
    },
    {
      name: 'Sribu',
      role: 'Graphic Designer',
      url: 'https://www.linkedin.com/company/sribu/',
      start: 'July 2015',
      end: 'November 2015',
      shortDescription: [
        'Create a Campaign Product Banner Using Adobe Illustrator & Photoshop',
        'Creating Banner Newsletter for marketing purposes'
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="title">
        <h2>
          <span>&#65371;</span> Where I&apos;ve Worked <span>&#65373;</span>
        </h2>
      </div>

      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((experience, index) => {
            return (
              <li
                key={index}
                className={`exp-slider-item ${index === selected && 'exp-slider-item-selected'}`}
                onClick={() => setSelected(index)}
              >
                <span>{experience.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;at&nbsp;
                <Link className="link link-color" href={expereinces[selected].url} target="_blank">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map((desc, index) => (
                <li key={index} className="exp-details-list-item">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
