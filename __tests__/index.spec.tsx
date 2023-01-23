import { act, render, screen, waitFor } from '@testing-library/react';
import ChakraApp from 'components/pages/ChakraApp';
import Index from 'pages/index';

describe('Renders', () => {
  test('Render index page', async () => {
    act(() => {
      render(
        <ChakraApp>
          <Index />
        </ChakraApp>
      );
    });
    const author = screen.getByText('Fernando Ibanez');
    await waitFor(() => expect(author).toBeInTheDocument());
  });
});
