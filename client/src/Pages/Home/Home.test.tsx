import '@testing-library/jest-dom';
import { beforeEach, describe, vi, it } from 'vitest';
import { render } from '@testing-library/react';

// HOOKS
import useWindowSize from '../../Hooks/useWindowSize';
// TYPES
import { SidebarPropTypes } from '../../Components/Sidebar/Sidebar.types';
import { ButtonPropTypes } from '../../Utils/Button/Button.types';

// PAGE
import Home from './Home';

// TEST MOCK : USEWINDOWHOOK
vi.mock('../../Hooks/useWindowSize', () => ({ default: vi.fn() }));

// TEST MOCK : BUTTON COMPONENT
vi.mock('../../src/Utils/Button/Button.tsx', () => ({
  default: ({
    windowSize,
    icon,
    title,
    className,
    onClick,
    dataTestId,
  }: ButtonPropTypes) => {
    const isMobile = Number(windowSize) <= 1300;
    return (
      <button data-testid={dataTestId} onClick={onClick} className={className}>
        {isMobile ? icon : title}
      </button>
    );
  },
}));

// TEST MOCK : SIDEBAR COMPONENT
vi.mock('../../Components/Sidebar/Sidebar.tsx', () => ({
  default: ({ isOpen, children }: SidebarPropTypes) =>
    isOpen ? <div data-testid="sidebar">{children}</div> : null,
}));

// TESTS
describe('HOMEPAGE TESTS : ', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    (useWindowSize as ReturnType<typeof vi.fn>).mockReturnValueOnce(1500); 
  });

  it('should render the Hompage correctly in the document', () => {
    render(<Home />);
  });
});
