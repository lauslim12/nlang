import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Textarea,
} from '@chakra-ui/react';
import { memo, useState } from 'react';

const ApiTester = () => {
  const [expression, setExpression] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [results, setResults] = useState<APIResponse>({
    status: 'idle',
    statusCode: 200,
    message:
      'The response of the API request will be posted in this field. Try out some expressions at the input above!',
  });

  const handleTest = async () => {
    setIsInvalid(false);

    try {
      const requestInit: RequestInit = {
        method: 'POST',
        body: JSON.stringify({ expression }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch('/api/parse', requestInit);
      if (!response.ok) {
        throw new Error('bad-request', { cause: await response.json() });
      }

      setResults(await response.json());
    } catch (err) {
      setIsInvalid(true);

      if (err instanceof Error && err.message === 'bad-request') {
        setResults(err.cause as FailureResponse);
        return;
      }

      setResults({
        status: 'error',
        statusCode: 500,
        message:
          'Unexpected error detected, please share this to the developer!',
        error: err,
      });
    }
  };

  return (
    <>
      <InputGroup size="sm">
        <InputLeftAddon backgroundColor="green.400" textColor="black">
          Expression
        </InputLeftAddon>

        <Input
          value={expression}
          onChange={({ target: { value } }) => setExpression(value)}
          placeholder="Input an expression here..."
          isInvalid={isInvalid}
          aria-label="input-nlang-expression"
        />

        <InputRightElement width="4.5rem">
          <Button
            onClick={handleTest}
            colorScheme="green"
            h="1.50rem"
            mr="1rem"
            px="1rem"
            size="xs"
          >
            Submit
          </Button>
        </InputRightElement>
      </InputGroup>

      <Textarea
        value={JSON.stringify(results, null, 4)}
        size="sm"
        placeholder="The results of the API will be posted here. Try out to type an expression there!"
        height="xs"
        isInvalid={isInvalid}
        aria-label="textarea-nlang-parsed"
        isReadOnly
      />
    </>
  );
};

export default memo(ApiTester);
