import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  text: string;
  link: string;
  target?: string;
  styles?: string;
}

const Button = ({ text, link, styles = '', target = '_blank' }: ButtonProps) => {
  return (
    <Link href={link} className={`btn ${styles}`} target={target}>
      {text}
    </Link>
  );
};

export default Button;
