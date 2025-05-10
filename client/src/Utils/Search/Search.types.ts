export interface SearchModalProps {
    isOpen: boolean;
    isMac: boolean;
    onClose: () => void;
}

export interface SearchProps {
  isMac: boolean;
}

export interface RecentSearchesProps {
    searches: string[];
    onSelectSearch: (search: string) => void;
    onClearSearches: () => void;
}

export type SearchBarProps = {
    onSearch: (term: string) => void;
};
