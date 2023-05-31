'use client';

import Button from '@/components/Button';
import { cubicBezier, motion } from 'framer-motion';
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <motion.p
        className="hero-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: cubicBezier(0.645, 0.045, 0.355, 1),
          delay: 1
        }}
      >
        Hi, my real name is
      </motion.p>
      <motion.h1
        className="hero-title-large"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: cubicBezier(0.645, 0.045, 0.355, 1),
          delay: 1.15
        }}
      >
        Abdul Rosyid.
      </motion.h1>
      <motion.h2
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: cubicBezier(0.645, 0.045, 0.355, 1),
          delay: 1.3
        }}
      >
        Doing frontend, unlocking potential.
      </motion.h2>
      <motion.h3
        className="hero-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: cubicBezier(0.645, 0.045, 0.355, 1),
          delay: 1.45
        }}
      >
        I specialize in transforming complex concepts into polished and intuitive user interfaces.
        Whether you need a sleek and modern website, an interactive web application, or a
        captivating landing page, I have the artistic eye and technical prowess to make it happen.
        Your users will be mesmerized by the seamless navigation and stunning aesthetics I bring to
        every project.
      </motion.h3>
      <div className="hero-button">
        <motion.div
          className="flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.25,
            ease: cubicBezier(0.645, 0.045, 0.355, 1),
            delay: 1.7
          }}
        >
          <Button text="See my work" link="/#work" styles="work-btn" target="_self" />
        </motion.div>
        <motion.div
          className="flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.25,
            ease: cubicBezier(0.645, 0.045, 0.355, 1),
            delay: 1.8
          }}
        >
          <Button
            text="Download Resume"
            link="https://docs.google.com/document/d/1WlZf8lnblgVUJ0Ami-wy-s02cKyVaJ-zv-1KmBhMpTk/edit?usp=sharing"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
