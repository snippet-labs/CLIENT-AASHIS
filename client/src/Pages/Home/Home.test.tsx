import '@testing-library/jest-dom';
import { expect, beforeEach, describe, vi, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// HOOKS
import useWindowSize from '../../Hooks/useWindowSize';
// TYPES
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

// TESTS
describe('HOMEPAGE TESTS : ', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should render the Hompage correctly in the document', () => {
    render(<Home />);
  });

  it('should show the show-categories button in the document', () => {
    render(<Home />);
    const button = screen.getByTestId('show-categories-button');
    expect(button).toBeInTheDocument();
  });

  it('should have the proper title for the button in desktop mode', () => {
    (useWindowSize as ReturnType<typeof vi.fn>).mockReturnValue(1500);
    render(<Home />);
    const button = screen.getByTestId('show-categories-button');
    expect(button).toHaveTextContent('SHOW CATEGORIES');
  });

  it('should have the icon displayed for the button in mobile mode', () => {
    (useWindowSize as ReturnType<typeof vi.fn>).mockReturnValue(380);
    render(<Home />);
    const button = screen.getByTestId('show-categories-button');
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveTextContent('SHOW CATEGORIES');
  });

  it('should initially have sidebar component in the document when clicked', async () => {
    render(<Home />);
    const button = screen.getByTestId('show-categories-button');
    await userEvent.click(button);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });
});
