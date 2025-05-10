export interface SearchModalProps {
  isOpen: boolean;
  isMac: boolean;
  windowSize: number;
  onClose: () => void;
}

export interface SearchProps {
  isMac: boolean;
  windowSize: number;
}

export interface RecentSearchesProps {
  searches: string[];
  onSelectSearch: (search: string) => void;
  onClearSearches: () => void;
}

export type SearchBarProps = {
  onSearch: (term: string) => void;
};
