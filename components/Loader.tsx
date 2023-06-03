'use client';

import { useEffect } from 'react';
import { AnimatePresence, cubicBezier, motion } from 'framer-motion';

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: cubicBezier(0.645, 0.045, 0.355, 1)
          }}
        >
          <motion.svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <title>Logo</title>
            <g>
              <g id="O" transform="translate(34.010000, 35.000000)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    delay: 1
                  }}
                  exit={{
                    scale: 2
                  }}
                  fill="currentColor"
                  d="M25.849 14.7498C25.849 17.0519 25.4128 19.0104 24.5404 20.6253C23.6748 22.2402 22.4933 23.4737 20.9958 24.3258C19.5051 25.171 17.829 25.5936 15.9674 25.5936C14.0921 25.5936 12.4091 25.1676 10.9184 24.3155C9.42781 23.4634 8.24971 22.2299 7.38418 20.615C6.51863 19.0001 6.08586 17.045 6.08586 14.7498C6.08586 12.4477 6.51863 10.4893 7.38418 8.87438C8.24971 7.25947 9.42781 6.02942 10.9184 5.18417C12.4091 4.33206 14.0921 3.90601 15.9674 3.90601C17.829 3.90601 19.5051 4.33206 20.9958 5.18417C22.4933 6.02942 23.6748 7.25947 24.5404 8.87438C25.4128 10.4893 25.849 12.4477 25.849 14.7498ZM21.3255 14.7498C21.3255 13.2586 21.1023 12.0011 20.6558 10.9772C20.2161 9.95326 19.5944 9.17674 18.7907 8.64761C17.987 8.11847 17.0459 7.85389 15.9674 7.85389C14.8889 7.85389 13.9478 8.11847 13.1441 8.64761C12.3404 9.17674 11.7153 9.95326 11.2688 10.9772C10.8291 12.0011 10.6093 13.2586 10.6093 14.7498C10.6093 16.241 10.8291 17.4986 11.2688 18.5225C11.7153 19.5464 12.3404 20.3229 13.1441 20.852C13.9478 21.3812 14.8889 21.6458 15.9674 21.6458C17.0459 21.6458 17.987 21.3812 18.7907 20.852C19.5944 20.3229 20.2161 19.5464 20.6558 18.5225C21.1023 17.4986 21.3255 16.241 21.3255 14.7498Z"
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut'
                }}
                exit={{
                  scale: 2
                }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
