'use client';

import Button from '@/components/Button';
import Logo from '@/components/Logo';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';

const Navbar = () => {
  const sectionLinks = [
    { name: 'About', link: '/#about' },
    { name: 'Experience', link: '/#experience' },
    { name: 'Work', link: '/#work' },
    { name: 'Contact', link: '/#contact' }
  ];

  const [navBarVisible, setNavBarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);

  useEffect(() => {
    //set navbar sticky after page offset y 100
    window.addEventListener('scroll', () => {
      window.pageYOffset > 100 ? setNavBarVisible(true) : setNavBarVisible(false);
    });

    // this make navbar menu close automaticly after clicking a section list
    const links = document.querySelectorAll('.nav-items-list-item-link');
    links.forEach((link) => {
      link.addEventListener('click', () => setResponsiveNavVisible(false));
    });

    // this make navbar menu will close if we click anything on *html
    const html = document.querySelector('html');
    html?.addEventListener('click', () => {
      setResponsiveNavVisible(false);
    });

    // this make navbar menu wont close if we click on nav area (prevent close when click anything on *html)
    const nav = document.querySelector('.nav-items');
    nav?.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }, []);

  // The main tag will become blurred when the hamburger menu is opened
  useEffect(() => {
    const main = document.querySelector('main');
    if (responsiveNavVisible) {
      main?.classList.add('blur');
    } else {
      main?.classList.remove('blur');
    }
  }, [responsiveNavVisible]);

  return (
    <nav>
      <div className={`wrapper ${navBarVisible && 'blur-nav'}`}>
        <div className="brand">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="nav-responsive-toggle">
          {/* hamburger menu*/}
          {responsiveNavVisible ? (
            <CgClose
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
            />
          ) : (
            <>
              <div className="nav-items-portfolio-button">
                <Button text="Portfolio" link="/#work" target="_self" />
              </div>

              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setResponsiveNavVisible(true);
                }}
              />
            </>
          )}
        </div>

        <div className={`nav-items ${responsiveNavVisible && 'nav-responsive'}`}>
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
