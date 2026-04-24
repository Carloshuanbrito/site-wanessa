import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold tracking-[0.01em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-60';

    const variants = {
    primary:
      'bg-[#FF5C00] text-white shadow-[0_18px_34px_rgba(255,92,0,0.25)] hover:-translate-y-0.5 hover:bg-[#e05200] hover:shadow-[0_0_25px_rgba(255,92,0,0.5)] focus:ring-[#FF5C00] transition-all duration-300',
    secondary:
      'bg-[#1A1A1A] text-white shadow-[0_16px_32px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-[#222] focus:ring-[#1A1A1A]',
    outline:
      'border border-[#00F0FF]/40 bg-transparent text-[#00F0FF] shadow-[0_10px_22px_rgba(0,240,255,0.05)] hover:-translate-y-0.5 hover:border-[#00F0FF]/60 hover:bg-[#00F0FF]/8 focus:ring-[#00F0FF]/50',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {icon && <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
    </button>
  );
};

export default Button;
