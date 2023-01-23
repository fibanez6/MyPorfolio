import { ChakraProvider } from '@chakra-ui/react';
import { render, screen, waitFor } from '@testing-library/react';
import Index from 'pages/index';

describe('Renders', () => {
  test('Render index page', async () => {
    render(
      <ChakraProvider>
        <Index />
      </ChakraProvider>
    );
    const author = screen.getByText('Fernando Ibanez');
    await waitFor(() => expect(author).toBeInTheDocument());
  });
});
