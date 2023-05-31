'use client';

import Link from 'next/link';
import React from 'react';
import { cubicBezier, motion } from 'framer-motion';
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
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: cubicBezier(0.645, 0.045, 0.355, 1),
        delay: 2
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link href={link} className="social-icons-list-item-link" target="_blank">
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialIcon;
