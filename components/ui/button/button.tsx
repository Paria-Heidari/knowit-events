import{ ReactNode } from 'react';
import Link from 'next/link';
import styles from '@/components/ui/button/button.module.css'
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
        <Link href={href} className={`${styles.btn} ${className}`}>
          {buttonText}
        </Link>
      ) : (
        <button onClick={onClick} className={`${styles.btn} ${className}`}>{buttonText}</button>
      )}
    </>
  );
};
