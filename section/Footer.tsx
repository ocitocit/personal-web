import SocialIcon from '@/components/SocialIcon';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <SocialIcon />
      <div className="footer-text">&#169;{new Date().getFullYear()} Built with Passionate by ocitocit.</div>
    </footer>
  );
};

export default Footer;
