import { ButtonPropTypes } from './Button.types';

// FUNCTIONAL UTILITY COMPONENT
const Button: React.FC<ButtonPropTypes> = ({
  windowSize,
  icon,
  title,
  className,
  onClick,
  dataTestId,
}) => {
  const isMobile = Number(windowSize) <= 1300;
  // RENDER
  return (
    <button onClick={onClick} className={className} data-testid={dataTestId}>
      {isMobile ? icon : title}
    </button>
  );
};
export default Button;
