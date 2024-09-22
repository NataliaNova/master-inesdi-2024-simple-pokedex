
import React from 'react';
import './button.css';

interface ButtonProps {
  label: "prev" | "next" | "Deselect" | "Select";
  onClick: () => void;
  children: React.ReactNode;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({ label, onClick, children, className }) => {
  return (
    <button onClick={onClick} aria-label={label} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;