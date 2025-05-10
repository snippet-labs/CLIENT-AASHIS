import { ButtonType } from './Button.types';

const Button: React.FC<ButtonType> = ({
  windowSize,
  icon,
  title,
  className,
  onClick,
}) => {
  const isMobile = windowSize <= 1300;
  return (
    <button onClick={onClick} className={className}>
      {isMobile ? icon : title}
    </button>
  );
};
export default Button;
