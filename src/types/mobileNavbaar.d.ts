
export interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  tabs: { PATH: string; TABNAME: string }[];
}