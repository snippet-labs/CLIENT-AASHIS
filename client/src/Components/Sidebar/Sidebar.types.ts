export interface SidebarPropTypes {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  dataTestId?: string;
}
