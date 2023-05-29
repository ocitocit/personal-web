'use client';

import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

const ScollToTopButton = () => {
  const [showButtonScroll, setShowButtonScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowButtonScroll(true);
      } else {
        setShowButtonScroll(false);
      }
    });
  }, []);

  const scrollup = () => {
    window.scroll({
      top: 0
    });
  };

  return (
    <div
      className={`scrolltotop ${showButtonScroll ? 'scrolltotop-show' : 'scrolltotop-hide'}`}
      onClick={scrollup}
    >
      <MdOutlineKeyboardDoubleArrowUp />
    </div>
  );
};

export default ScollToTopButton;
