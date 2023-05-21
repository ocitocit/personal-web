import Button from '@/components/Button';
import Logo from '@/components/Logo';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const sectionLinks = [
    { name: 'About', link: '/#about' },
    { name: 'Experience', link: '/#experience' },
    { name: 'Work', link: '/#work' },
    { name: 'Contact', link: '/#contact' }
  ];

  return (
    <nav>
      <div className="wrapper">
        <div className="brand">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }) => (
              <li key={name} className="nav-items-list-item">
                <Link href={link} className="nav-items-list-item-link">
                  <span className="link">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-items-button">
            <Button
              text="Resume"
              link="https://docs.google.com/document/d/1WlZf8lnblgVUJ0Ami-wy-s02cKyVaJ-zv-1KmBhMpTk/edit?usp=sharing"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
