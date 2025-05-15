
export interface ButtonType {
  windowSize?: number;
  icon?: React.ReactNode;
  title?: string;
  className?: string;
  onClick?: () => void;
  dataTestId?: string;
}