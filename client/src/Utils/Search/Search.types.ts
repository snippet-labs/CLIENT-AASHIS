export interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface RecentSearchesProps {
    searches: string[];
    onSelectSearch: (search: string) => void;
    onClearSearches: () => void;
}