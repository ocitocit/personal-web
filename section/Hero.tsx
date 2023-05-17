import Button from '@/components/Button';
import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <p className="hero-title">Hi my name is</p>
      <p className="hero-title-large">Abdul Rosyid.</p>
      <h1 className="hero-title-large hero-title-sub">Doing frontend, unlocking potential.</h1>
      <h2 className="hero-text">
        I specialize in transforming complex concepts into polished and intuitive user interfaces.
        Whether you need a sleek and modern website, an interactive web application, or a
        captivating landing page, I have the artistic eye and technical prowess to make it happen.
        Your users will be mesmerized by the seamless navigation and stunning aesthetics I bring to
        every project.
      </h2>
      <div className="hero-button">
        <Button
          text="Download Resume"
          link="https://docs.google.com/document/d/1WlZf8lnblgVUJ0Ami-wy-s02cKyVaJ-zv-1KmBhMpTk/edit?usp=sharing"
        />
      </div>
    </div>
  );
};

export default Hero;