export interface ButtonPropTypes {
  windowSize?: number;
  icon?: React.ReactNode;
  title?: string;
  className?: string;
  onClick?: () => void;
  dataTestId?: string;
}