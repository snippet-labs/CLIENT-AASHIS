import React, { useState, useRef, useEffect } from 'react';

// ICONS
import { IoSearchSharp } from 'react-icons/io5';
import { MdKeyboardCommandKey } from 'react-icons/md';
import { IoIosCloseCircle } from 'react-icons/io';

// TYPES
import { SearchModalProps } from './Search.types';

// COMPONENTS
import RecentSearches from './RecentSearch';

// FUNCTIONAL UTILITY COMPONENT
const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  isMac,
  windowSize,
}) => {
  // STATES
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // SIDE-EFFECTS
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }

      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    const updatedSearches = [
      searchQuery,
      ...recentSearches.filter((item) => item !== searchQuery),
    ].slice(0, 5);

    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    console.log(`Searching for: ${searchQuery}`);
    setQuery('');
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  if (!isOpen) return null;

  const isMobile = windowSize <= 1300;

  // RENDER
  return (
    <div
      className="fixed inset-0 BLUR-MD SHADOW FLEX-START pt-[20vh] Z50 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="w-full max-w-2xl mx-4 bg-white rounded-xl BORDER SHADOW overflow-hidden FLEX COLUMN max-h-[60vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="CENTER px-4 py-3 border-b border-gray-100">
          <div className="text-gray-500">
            <IoSearchSharp size={20} />
          </div>
          <form onSubmit={handleSubmit} className="flex-1 px-3">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search your item here .."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-gray-900 text-base placeholder:text-gray-400"
            />
          </form>
          <button
            className="p-1.5 text-gray-500 hover:text-gray-700 POINTER transition-colors"
            onClick={onClose}
            aria-label="Close search"
          >
            <IoIosCloseCircle size={20} />
          </button>
        </div>

        <div className="overflow-y-auto overscroll-contain min-h-[100px] max-h-[400px]">
          {recentSearches.length > 0 && (
            <RecentSearches
              searches={recentSearches}
              onSelectSearch={(search) => {
                setQuery(search);
                handleSearch(search);
              }}
              onClearSearches={clearRecentSearches}
            />
          )}

          {query && (
            <div className="p-6 text-center text-gray-500 text-sm">
              Your search is on the way ...
            </div>
          )}
        </div>

        {!isMobile && (
          <div className="END px-4 py-3 border-t border-gray-100">
            <div className="CENTER gap-1 text-xs text-gray-500">
              {isMac ? (
                <span className="FLEX-CENTER bg-gray-100 rounded px-1.5 py-1 font-medium">
                  <MdKeyboardCommandKey size={14} />
                </span>
              ) : (
                <span className="FLEX-CENTER bg-gray-100 rounded px-1.5 py-0.5 min-w-[18px] font-medium">
                  CTRL
                </span>
              )}
              <span className="text-gray-400">+</span>
              <span className="FLEX-CENTER bg-gray-100 rounded px-1.5 py-1 min-w-[18px] font-medium">
                K
              </span>
              <span className="ml-1">to close</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
