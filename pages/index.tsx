import {
  Button,
  Code,
  Flex,
  FormControl,
  Heading,
  Kbd,
  List,
  Stack,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import { useMonaco } from '@monaco-editor/react';
import { type ReactNode, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  FaCheckCircle,
  FaComment,
  FaGithub,
  FaIcons,
  FaLanguage,
  FaReact,
  FaStar,
} from 'react-icons/fa';
import { SiChakraui, SiIcons8, SiPython, SiTypescript } from 'react-icons/si';

import ApiTester from '@/components/ApiTester';
import CodeBlock from '@/components/CodeBlock';
import CodeEditor from '@/components/CodeEditor';
import ExternalLinkText from '@/components/ExternalLinkText';
import FloatingActionButton from '@/components/FloatingActionButton';
import Layout from '@/components/Layout';
import ListPoint from '@/components/ListPoint';
import Section from '@/components/Section';

import * as nlang from '../nlang';

interface ScriptFormSchema {
  script: string;
}

export function Home() {
  const monaco = useMonaco();
  const { colorMode, toggleColorMode } = useColorMode();
  const [submittedScript, setSubmittedScript] = useState('');
  const { control, handleSubmit, formState } = useForm<ScriptFormSchema>({
    mode: 'all',
    defaultValues: {
      script: nlang.sampleScript,
    },
  });

  // This submission process will never fail because the Nlang parser is embedded into
  // the application, unlike when we're trying to use the API.
  const submitScript = handleSubmit((data) => {
    const tokenized = nlang.parseAndGetTokens(data.script);
    const translated = tokenized.map(nlang.translateNlang);
    setSubmittedScript(translated.map((word) => `• ${word}`).join('\n'));
  });

  return (
    <Layout>
      <VStack as="header" textAlign="center">
        <Heading size="xl">Nlang Scripting Language</Heading>
        <Heading as="h2" size="md" fontWeight="medium">
          A special language to translate your income and expenses, complete
          with code editor!
        </Heading>
        <Heading as="h3" size="sm" fontWeight="normal">
          For a quick start, try to run the example script and try to get the
          hang of it!
        </Heading>
      </VStack>

      <Flex as="main" flex={1} direction="column" gap={8} my={2}>
        <Section title="About">
          <Text>
            This is a project to showcase the idea of developing a web-based
            text editor with a custom programming language, fully packed with
            features such as autocomplete, real-time syntax error highlights,
            hints, implementation of a language server as the
            lexer/parser/listener to process the code, and colorized theme. This
            project is developed with these technologies:
          </Text>

          <List>
            <ListPoint icon={SiTypescript} color="orange.400">
              <Code>TypeScript</Code> as the main programming language.
            </ListPoint>

            <ListPoint icon={FaLanguage} color="orange.400">
              <Code>ANTLR4</Code> as the grammar parser, the lifeblood of the
              custom scripting language.
            </ListPoint>

            <ListPoint icon={SiPython} color="orange.400">
              <Code>Python</Code> to generate ANTLR4 lexers, parsers, and
              listeners.
            </ListPoint>

            <ListPoint icon={FaReact} color="orange.400">
              <Code>React with Next.js</Code> as the view layer / website.
            </ListPoint>

            <ListPoint icon={SiChakraui} color="orange.400">
              <Code>ChakraUI</Code> as the UI framework of this website.
            </ListPoint>

            <ListPoint icon={FaGithub} color="orange.400">
              <Code>GitHub and GitHub Actions</Code> as the code repository and
              CI/CD.
            </ListPoint>

            <ListPoint icon={FaIcons} color="orange.400">
              <Code>React Icons</Code> for all of these nice icons!
            </ListPoint>

            {/* <a target="_blank" href="https://icons8.com/icon/JZFf1ZBz96g1/code">Code</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
            <ListPoint icon={SiIcons8} color="orange.400">
              <Code>Icons8</Code> for the nice code favicon!
            </ListPoint>
          </List>
        </Section>

        <Section title="Background">
          <Text>
            On a Saturday morning, I was enjoying the rain outside of my
            apartment in Tokyo, Japan on my balcony. While I was busy browsing{' '}
            <ExternalLinkText href="https://www.instagram.com/">
              Instagram
            </ExternalLinkText>
            , suddenly I got an email from{' '}
            <ExternalLinkText href="https://medium.com/">
              Medium
            </ExternalLinkText>{' '}
            telling me my weekly recommendations. One of the recommendations was
            showcasing the creation of a simple text editor on the browser. I
            got fascinated by it and decided to give it a try with my own ways.
            I decided to augment it with the usage of a language server, in this
            case,{' '}
            <ExternalLinkText href="https://www.antlr.org/">
              ANTLR
            </ExternalLinkText>{' '}
            to provide it with some kind of faux-Intellisense, much like how you
            usually use{' '}
            <ExternalLinkText href="https://code.visualstudio.com/">
              Visual Studio Code
            </ExternalLinkText>{' '}
            with certain smart languages such as{' '}
            <ExternalLinkText href="https://www.typescriptlang.org/">
              TypeScript
            </ExternalLinkText>
            , <ExternalLinkText href="https://go.dev/">Go</ExternalLinkText>, or{' '}
            <ExternalLinkText href="https://www.python.org/">
              Python
            </ExternalLinkText>
            . After some time of developing and playing around with the idea, I
            came up with this website, a prototype of my idea.
          </Text>

          <Text>
            There are definitely things that could be improved here and there,
            so please feel free to let me know and/or contribute to this{' '}
            <ExternalLinkText href="https://github.com/lauslim12/nlang">
              open source project!
            </ExternalLinkText>
          </Text>
        </Section>

        <Section title="Features">
          <Text>
            Several features are available on this language, and in extension,
            the editor:
          </Text>

          <List>
            <ListPoint icon={FaStar} color="green.400">
              Autocomplete, you can press the <Kbd>tab</Kbd> or <Kbd>enter</Kbd>{' '}
              key like your favorite IDE when you start to type one of the
              keywords.
            </ListPoint>

            <ListPoint icon={FaStar} color="green.400">
              Real-time error checking, if you have made any mistakes when
              writing the code, it will automatically show you the usual red
              lines that you see while programming on your favorite IDE. It will
              show the description of the error.
            </ListPoint>

            <ListPoint icon={FaStar} color="green.400">
              It supports single-line comments, so you can write your own
              comments there.
            </ListPoint>

            <ListPoint icon={FaStar} color="green.400">
              {colorMode === 'dark'
                ? 'The website and the code editor supports light mode!'
                : 'The website and the code editor supports dark mode!'}{' '}
              Click the floating action button (light bulb) on the bottom right
              to try it out.
            </ListPoint>

            <ListPoint icon={FaStar} color="green.400">
              Website is intuitive and of course, responsive!
            </ListPoint>

            <ListPoint icon={FaStar} color="green.400">
              Complete with a REST API to be connected to your web service.
            </ListPoint>

            <ListPoint icon={FaStar} color="green.400">
              Language contains a special secret easter egg! Try to find it 😉!
            </ListPoint>
          </List>
        </Section>

        <Section title="Grammar">
          <Text>
            Nlang is a very straightforward scripting language. The grammar of
            the language is <Code>ADD (INCOME | EXPENSE) NUMBER STRING</Code>.
            The following describes the keywords for Nlang:
          </Text>

          <List>
            <ListPoint icon={FaComment} color="red.400">
              <Code>ADD</Code> is the starting keyword. You have to type this
              keyword every time you want to start a new declaration.
            </ListPoint>

            <ListPoint icon={FaComment} color="red.400">
              <Code>INCOME</Code> or <Code>EXPENSE</Code> is the next keyword.
              You have to use this to declare whether you have made an income or
              an expense.
            </ListPoint>

            <ListPoint icon={FaComment} color="red.400">
              <Code>NUMBER</Code> is the next keyword. It is not actually a
              keyword per-se, but you have to write the amount that you have
              received or expended. You have to use integers for this case.
            </ListPoint>

            <ListPoint icon={FaComment} color="red.400">
              <Code>STRING</Code> is the final keyword. You have to use
              double-quotes before you start to write your reason for receiving
              / expending.
            </ListPoint>

            <ListPoint icon={FaComment} color="red.400">
              <Code>&#47;&#47;</Code> means a single-line comment. You can use
              this when you want to add something to describe your script.
            </ListPoint>

            <ListPoint icon={FaComment} color="red.400">
              There is a secret keyword that you can use to show a special
              message when compiled! Try to find it out in the{' '}
              <ExternalLinkText href="https://github.com/lauslim12/nlang">
                source code!
              </ExternalLinkText>
            </ListPoint>
          </List>

          <Text>Two examples of valid Nlang expressions are:</Text>

          <List>
            <ListPoint icon={FaCheckCircle} color="purple.400">
              <Code>ADD INCOME 5000 &quot;Sold a manga&quot;</Code> means that
              you have received 5000 because you have successfully sold your
              manga.
            </ListPoint>

            <ListPoint icon={FaCheckCircle} color="purple.400">
              <Code>ADD EXPENSE 750 &quot;For a grilled fish&quot;</Code> means
              that you have expended 750 because you just bought a grilled fish.
            </ListPoint>
          </List>

          <Text>Sounds quite simple, right? Let&apos;s dive in then!</Text>
        </Section>

        <Section title="API">
          <Text>
            Nlang has a REST Application Programming Interface (API) that you
            can access for free, in case you want to use it for your own,
            personal use.
          </Text>

          <Text>
            API URL: <Code>https://nlang.vercel.app/api/parse</Code>
          </Text>

          <Text>
            It accepts a Content-Type of <Code>application/json</Code>, and you
            need to submit a JSON object with <Code>expression</Code> property
            inside it, like the following code block. API only accepts{' '}
            <Code>POST</Code> requests at the moment. You could use the
            following input to try and make requests if you do not want to use
            the editor!
          </Text>

          <CodeBlock>
            {JSON.stringify(
              { expression: 'Put your Nlang expression here...' },
              null,
              2
            )}
          </CodeBlock>

          <ApiTester />
        </Section>

        <Section title="Editor">
          <FormControl as="form" onSubmit={submitScript}>
            <Stack
              spacing={4}
              direction={['column', 'column', 'column', 'row']}
            >
              <CodeEditorContainer>
                <Text>
                  Type in some Nlang code/expressions in the editor, or run the
                  example script!
                </Text>

                <Controller
                  name="script"
                  control={control}
                  rules={{
                    validate: (script) =>
                      nlang.parseAndGetSyntaxErrors(script).length === 0,
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <CodeEditor
                        defaultLanguage={nlang.metadata.id}
                        defaultValue={field.value}
                        defaultPath={nlang.metadata.path}
                        theme={
                          colorMode === 'dark'
                            ? nlang.metadata.alternativeTheme
                            : nlang.metadata.theme
                        }
                        beforeMount={nlang.registerMonaco}
                        onChange={(value) => {
                          // Change field
                          field.onChange(value);

                          // At this point, the Monaco instance should be ready because we already have
                          // rendered the code editor. At the same time, the `value` should never be undefined
                          // unless if we manually delete the code editor somehow.
                          if (!monaco || !value) {
                            return;
                          }

                          // Get the URI of the editor so we can get the model.
                          const uri = monaco.Uri.parse(nlang.metadata.path);
                          if (!uri) {
                            return;
                          }

                          // Get the model so we can mark the failures.
                          const model = monaco.editor.getModel(uri);
                          if (!model) {
                            return;
                          }

                          // Mark the errors in the code editor.
                          const errors = nlang.parseAndGetSyntaxErrors(value);
                          monaco.editor.setModelMarkers(model, 'owner', errors);
                        }}
                      />

                      <Button
                        type="submit"
                        colorScheme="green"
                        isDisabled={
                          fieldState.invalid || formState.isSubmitting
                        }
                        isLoading={formState.isSubmitting}
                        alignSelf="flex-end"
                      >
                        Submit Code
                      </Button>
                    </>
                  )}
                />
              </CodeEditorContainer>

              <CodeEditorContainer>
                <Text>
                  You will see the translated script here. This part of the code
                  editor is read only.
                </Text>

                <CodeEditor
                  defaultLanguage="txt"
                  defaultValue="You have not yet submitted the script. Please submit the script and you will see the translated language here."
                  value={submittedScript}
                  theme={nlang.metadata.theme}
                  readOnly
                />

                <Button
                  type="reset"
                  colorScheme="red"
                  alignSelf="flex-end"
                  onClick={() =>
                    setSubmittedScript(
                      'You have cleared the input. Please re-submit the script and you will see the translated language here.'
                    )
                  }
                >
                  Clear Results
                </Button>
              </CodeEditorContainer>
            </Stack>
          </FormControl>
        </Section>
      </Flex>

      <VStack as="footer" textAlign="center" mt={4}>
        <ExternalLinkText
          fontSize="x-small"
          href="https://github.com/lauslim12/nlang"
        >
          Thank you so much for using Nlang! Made with ♥ in Tokyo, Japan
        </ExternalLinkText>
      </VStack>

      <FloatingActionButton onClick={toggleColorMode} />
    </Layout>
  );
}

interface CodeEditorContainerProps {
  children: ReactNode;
}

const CodeEditorContainer = ({ children }: CodeEditorContainerProps) => (
  <VStack
    align="start"
    h={['500px', '500px', '500px', '50vh']}
    w={['full', 'full', 'full', '50%']}
  >
    {children}
  </VStack>
);

export default Home;
