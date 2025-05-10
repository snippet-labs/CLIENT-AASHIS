import { useState, useEffect } from "react";

const useSearchModal = () => {
    // STATE
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // HANDLER FUNCTIONS 
    const handleOpenSearchModal = () => setIsOpen(true);
    const handleCloseSearchModal = () => setIsOpen(false);

    // SIDE-EFFECT: listen for Cmd+K / Ctrl+K
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && (event.key === 'k' || event.key === 'K')) {
                event.preventDefault();
                setIsOpen(prev => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return {
        isOpen,
        handleOpenSearchModal,
        handleCloseSearchModal,
        toggleSearchModal: () => setIsOpen(prev => !prev),
    };
};

export default useSearchModal;
