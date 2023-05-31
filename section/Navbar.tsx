'use client';

import Button from '@/components/Button';
import Logo from '@/components/Logo';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import { delay, motion } from 'framer-motion';

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
        <motion.div
          className="brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}
        >
          <Link href="/">
            <Logo />
          </Link>
        </motion.div>

        <div className="nav-responsive-toggle">
          {/* hamburger menu*/}
          {responsiveNavVisible ? (
            <motion.div
              className="nav-responsive-toggle"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut'
              }}
            >
              <CgClose
                onClick={(e) => {
                  e.stopPropagation();
                  setResponsiveNavVisible(false);
                }}
              />
            </motion.div>
          ) : (
            <>
              <motion.div
                className="nav-items-portfolio-button"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  delay: 0.3
                }}
              >
                <Button text="Portfolio" link="/#work" target="_self" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut'
                }}
              >
                <GiHamburgerMenu
                  onClick={(e) => {
                    e.stopPropagation();
                    setResponsiveNavVisible(true);
                  }}
                />
              </motion.div>
            </>
          )}
        </div>

        <div className={`nav-items ${responsiveNavVisible && 'nav-responsive'}`}>
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="nav-items-list-item"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  delay: 0.3 + index * 0.1
                }}
              >
                <Link href={link} className="nav-items-list-item-link">
                  <span className="link">{name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="nav-items-button"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
              delay: 0.6
            }}
          >
            <Button
              text="Resume"
              link="https://docs.google.com/document/d/1WlZf8lnblgVUJ0Ami-wy-s02cKyVaJ-zv-1KmBhMpTk/edit?usp=sharing"
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
