import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  text: string;
  link: string;
}

const Button = ({ text, link }: ButtonProps) => {
  return (
    <Link href={link} className="btn" target="_blank">
      {text}
    </Link>
  );
};

export default Button;
