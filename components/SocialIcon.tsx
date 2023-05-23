import Link from 'next/link';
import React from 'react';
import { FiDribbble, FiFigma, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const SocialIcon = () => {
  const socialLinks = [
    { name: 'Github', icon: <FiGithub />, link: 'https://www.github.com/ocitocit' },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      link: 'https://www.linkedin.com/in/ocitocit/'
    },
    {
      name: 'Twitter',
      icon: <FiTwitter />,
      link: 'https://twitter.com/0citocit'
    },
    {
      name: 'Dribbble',
      icon: <FiDribbble />,
      link: 'https://dribbble.com/ocitocit'
    },
    {
      name: 'Figma',
      icon: <FiFigma />,
      link: 'https://www.figma.com/@ocitocit'
    }
  ];

  return (
    <div className="social-icons">
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link href={link} className="social-icons-list-item-link" target="_blank">
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcon;
