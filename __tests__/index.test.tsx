import { ChakraProvider } from '@chakra-ui/react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import type { ReactElement } from 'react';

import Home from '@/pages';

import * as nlang from '../nlang';

const renderWithProviders = (ui: ReactElement) => {
  const user = userEvent.setup();

  return {
    user,
    ...render(ui, {
      wrapper: ({ children }) => <ChakraProvider>{children}</ChakraProvider>,
    }),
  };
};

const testSection = (
  name: 'About' | 'Background' | 'Features' | 'Grammar' | 'API' | 'Editor'
) => {
  const section = screen.getByTestId(name);
  expect(section).toBeInTheDocument();
  expect(within(section).getByText('#')).toBeInTheDocument();
  expect(within(section).getByText(name)).toBeInTheDocument();

  return true;
};

test('renders properly, shows all the contents', () => {
  renderWithProviders(<Home />);

  // Assert title.
  expect(screen.getByText('Nlang Scripting Language')).toBeInTheDocument();

  // Assert all contents and paragraphs.
  const rendered = [
    testSection('About'),
    testSection('Background'),
    testSection('Editor'),
    testSection('Features'),
    testSection('Grammar'),
    testSection('API'),
    testSection('Editor'),
  ];
  expect(rendered).toBeTruthy();
  rendered.forEach((render) => expect(render).toBe(true));

  // Assert footer.
  expect(
    screen.getByText(
      'Thank you so much for using Nlang! Made with ♥ in Tokyo, Japan'
    )
  ).toBeInTheDocument();
});

test('renders all accurate external links', () => {
  renderWithProviders(<Home />);

  // Expected links, they are in first-to-last order. We read the code from top to bottom,
  // and then left to right.
  const expectedLinks = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/',
    },
    {
      name: 'Medium',
      link: 'https://medium.com/',
    },
    {
      name: 'ANTLR',
      link: 'https://www.antlr.org/',
    },
    {
      name: 'Visual Studio Code',
      link: 'https://code.visualstudio.com/',
    },
    {
      name: 'TypeScript',
      link: 'https://www.typescriptlang.org/',
    },
    {
      name: 'Go',
      link: 'https://go.dev/',
    },
    {
      name: 'Python',
      link: 'https://www.python.org/',
    },
    {
      name: 'open source project!',
      link: 'https://github.com/lauslim12/nlang',
    },
    {
      name: 'source code!',
      link: 'https://github.com/lauslim12/nlang',
    },
    {
      name: 'Thank you so much for using Nlang! Made with ♥ in Tokyo, Japan',
      link: 'https://github.com/lauslim12/nlang',
    },
  ];

  // Get all links and make sure they are accurate.
  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(expectedLinks.length);

  // Using a normal `for` loop to keep it simple. Both should be the same length (assertion above proves that).
  for (let i = 0; i < links.length; i += 1) {
    expect(links[i]).not.toBeDisabled();
    expect(links[i]).toBeVisible();
    expect(links[i]).toHaveAttribute('href', expectedLinks[i].link);
    expect(links[i]).toHaveAccessibleName(expectedLinks[i].name);
  }
});

test('switches color mode properly', async () => {
  const { user } = renderWithProviders(<Home />);

  // Ensures the dark mode is not yet active.
  expect(
    screen.queryByText(/The website and the code editor supports light mode!/i)
  ).not.toBeInTheDocument();
  expect(
    screen.getByText(/The website and the code editor supports dark mode!/i)
  ).toBeInTheDocument();

  // Check out the floating action button.
  const colorModeSwitchButton = screen.getByRole('button', {
    name: 'Icon button to toggle the color mode',
  });
  expect(colorModeSwitchButton).toBeInTheDocument();
  expect(colorModeSwitchButton).not.toBeDisabled();
  expect(colorModeSwitchButton).toBeVisible();
  await user.click(colorModeSwitchButton);

  // Click and assert that the dark mode is active.
  expect(
    screen.queryByText(/The website and the code editor supports dark mode!/i)
  ).not.toBeInTheDocument();
  expect(
    screen.getByText(/The website and the code editor supports light mode!/i)
  ).toBeInTheDocument();
});

test('integrates with the API properly', async () => {
  // Setup expected results.
  const correctNlang = `ADD INCOME 50000 "Received money from a lottery"`;
  const expectedSuccessResponse: SuccessResponse = {
    status: 'success',
    statusCode: 200,
    message: 'Successfully parsed the Nlang expression!',
    data: {
      translated: nlang
        .parseAndGetTokens(correctNlang)
        .map(nlang.translateNlang),
      tokens: nlang.parseAndGetTokens(correctNlang),
    },
  };

  const incorrectNlang = `ADD EXPENSE 10`;
  const expectedFailureResponse: FailureResponse = {
    status: 'failure',
    statusCode: 422,
    message: 'Failed to parse the Nlang expression!',
    error: nlang.parseAndGetSyntaxErrors(incorrectNlang),
  };

  const expectedNetworkError: ErrorResponse = {
    status: 'error',
    statusCode: 500,
    message: 'Unexpected error detected, please share this to the developer!',
    error: {
      cause: {
        name: 'NetworkError',
      },
    },
  };

  const expectedIdle: IdleResponse = {
    status: 'idle',
    statusCode: 200,
    message:
      'The response of the API request will be posted in this field. Try out some expressions at the input above!',
  };

  // Setup endpoints.
  const success = rest.post('/api/parse', (_, res, ctx) => {
    return res(ctx.json<SuccessResponse>(expectedSuccessResponse));
  });

  const failure = rest.post('/api/parse', (_, res, ctx) => {
    return res(ctx.json<FailureResponse>(expectedFailureResponse));
  });

  const error = rest.post('/api/parse', (_, res) => {
    return res.networkError('Failed to connect!');
  });

  // Silence `console.error` because we know it's going to be noisy - it's expected to fail the first time.
  const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();

  // Setup server and listen to it on this particular test.
  const server = setupServer(error);
  server.listen();

  // Try to make a request to the API.
  const { user } = renderWithProviders(<Home />);
  const textInput = screen.getByLabelText('input-nlang-expression');
  expect(textInput).toBeInTheDocument();
  expect(textInput).not.toBeDisabled();
  expect(textInput).toHaveAttribute('placeholder', expect.anything());
  expect(textInput).toHaveDisplayValue('');
  await user.type(textInput, 'ADD EXPENSE 10');

  // The textarea should be rendered as well.
  const textareaResults = screen.getByLabelText('textarea-nlang-parsed');
  expect(textareaResults).toBeInTheDocument();
  expect(textareaResults).not.toBeDisabled();
  expect(textareaResults).toHaveAttribute('readOnly');
  expect(textareaResults).toHaveValue(JSON.stringify(expectedIdle, null, 4));

  // Submit the request to the API.
  const submitButton = screen.getByRole('button', { name: 'Submit' });
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).not.toBeDisabled();
  await user.click(submitButton);

  // Should throw an error in the console if the user's network is wrong.
  expect(consoleErrorMock).toHaveBeenCalledTimes(1);

  // See the text area results, should error first.
  expect(textareaResults).toHaveValue(
    JSON.stringify(expectedNetworkError, null, 4)
  );

  // Restore the console error mock, change the server to always fail. No need to change
  // the text in the text input because it's already expected to be failure.
  consoleErrorMock.mockRestore();
  server.resetHandlers();
  server.use(failure);
  await user.click(submitButton);
  expect(textareaResults).toHaveValue(
    JSON.stringify(expectedFailureResponse, null, 4)
  );

  // Console should not throw an error anymore.
  expect(consoleErrorMock).not.toBeCalled();

  // Change to success and change the text as well.
  server.resetHandlers();
  server.use(success);
  await user.type(
    textInput,
    `ADD INCOME 50000 "Received money from a lottery"`
  );
  await user.click(submitButton);
  expect(consoleErrorMock).not.toBeCalled();
  expect(textareaResults).toHaveValue(
    JSON.stringify(expectedSuccessResponse, null, 4)
  );

  // Close server to finish the test.
  server.close();
});
