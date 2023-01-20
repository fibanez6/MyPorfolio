import { ChakraProvider } from '@chakra-ui/react';
import { act, render, screen, waitFor } from '@testing-library/react';
import Index from 'pages/index';

describe('Renders', () => {
  test('Render index page', async () => {
    act(() => {
      render(
        <ChakraProvider>
          <Index />
        </ChakraProvider>
      );
    });
    const author = screen.getByText('Fernando Ibanez');
    await waitFor(() => expect(author).toBeInTheDocument());
  });
});
