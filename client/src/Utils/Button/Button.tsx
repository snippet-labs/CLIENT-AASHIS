import { ButtonPropTypes } from './Button.types';

// FUNCTIONAL UTILITY COMPONENT
const Button: React.FC<ButtonPropTypes> = ({
  windowSize,
  icon,
  title,
  className,
  onClick,
}) => {
  const isMobile = Number(windowSize) <= 1300;
  // RENDER
  return (
    <button onClick={onClick} className={className}>
      {isMobile ? icon : title}
    </button>
  );
};
export default Button;
