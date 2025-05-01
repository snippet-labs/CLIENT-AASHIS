import { useState, useEffect } from "react";

const useSearchModal = () => {
    // STATES
    const [isOpen, setIsOpen] = useState<boolean>(() => false)

    // HANDLER FUNCTIONS 
    const handleOpenSearchModal = () => {
        setIsOpen(true);
    }
    const handleCloseSearchModal = () => {
        setIsOpen(false);
    }

    // SIDE-EFFECT 
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Modal should open on Pressing Cmd+K & Ctrl+K
            if ((event.metaKey || event.ctrlKey) && (event.key === 'k' || event.key === 'K')) {
                event.preventDefault();
                setIsOpen((previous) => !previous);
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        () => window.removeEventListener('keydown', handleKeyDown);
    }, [])

    return {
        isOpen,
        handleCloseSearchModal,
        handleOpenSearchModal,
        toggleSearchModal: () => setIsOpen((previous) => !previous)
    };

}

export default useSearchModal;