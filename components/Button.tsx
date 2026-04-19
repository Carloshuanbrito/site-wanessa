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
      'bg-slate-900 text-white shadow-[0_18px_34px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:bg-slate-800 focus:ring-slate-900',
    secondary:
      'bg-slate-800 text-white shadow-[0_16px_32px_rgba(15,23,42,0.16)] hover:-translate-y-0.5 hover:bg-slate-700 focus:ring-slate-800',
    outline:
      'border border-slate-300 bg-white text-slate-900 shadow-[0_10px_22px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 focus:ring-slate-400',
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
