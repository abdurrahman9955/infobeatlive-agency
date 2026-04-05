interface ButtonProps {
  children: React.ReactNode;
  target?:string;  
  rel?:string;
  variant?: 'gradient' | 'primary' | 'secondary' | 'outline' | 'white';
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, target,  rel, variant = 'primary', className = '', href, onClick }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    gradient: 'text-white bg-gradient-to-r from-blue-600 to-purple-700 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-opacity-50',
    primary: "border-transparent text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg focus:ring-blue-500",
    secondary: "border-slate-200 text-slate-700 bg-white hover:bg-slate-50 focus:ring-blue-500",
    outline: "border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-500",
    white: "border-transparent text-blue-600 bg-white hover:bg-blue-50 focus:ring-white"
  };

  if (href) {
    return (
      <a href={href} target={target}  rel={rel} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }
 
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};