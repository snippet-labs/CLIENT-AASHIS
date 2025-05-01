import { ButtonType } from "./Button.types";

const Button:React.FC<ButtonType> = ({ windowSize, icon, title, className }) => {
  const isMobile = windowSize <= 1300;
  return <button className={className}>{isMobile ? icon : title}</button>;
};
export default Button;
