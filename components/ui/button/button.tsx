import Link from 'next/link';
import React, { ReactNode } from 'react';

export interface ButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  children?: ReactNode;
  className?:string
}

export const Button: React.FC<ButtonProps> = ({ label, href, onClick, children, className }) => {
  const buttonText = label || children;

  return (
    <>
      {href ? (
        <Link href={href} className={className}>
          {buttonText}
        </Link>
      ) : (
        <button onClick={onClick} className={className}>{buttonText}</button>
      )}
    </>
  );
};
