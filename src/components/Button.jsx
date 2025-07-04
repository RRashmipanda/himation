import clsx from 'clsx';

const Button = ({ 
  id, 
  title, 
  rightIcon, 
  leftIcon, 
  containerClass = '', 
  onClick,
  disabled = false 
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'group relative px-6 py-2.5 font-medium text-sm rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95',
        'bg-gradient-to-r from-rose-100 to-pink-100 text-gray-700 hover:from-rose-200 hover:to-pink-200',
        'border border-rose-200 hover:border-rose-300 shadow-sm hover:shadow-md',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        containerClass
      )}
    >
      <span className="flex items-center gap-2">
        {leftIcon && (
          <span className="transition-transform duration-200 group-hover:scale-110">
            {leftIcon}
          </span>
        )}
        <span className="font-medium">{title}</span>
        {rightIcon && (
          <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:scale-110">
            {rightIcon}
          </span>
        )}
      </span>
      
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-200/0 to-pink-200/0 group-hover:from-rose-200/20 group-hover:to-pink-200/20 transition-all duration-300"></div>
    </button>
  );
};

export default Button;
