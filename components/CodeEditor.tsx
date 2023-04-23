import { Skeleton, VStack } from '@chakra-ui/react';
import { Editor, type EditorProps } from '@monaco-editor/react';
import { memo } from 'react';

const CodeEditorLoader = () => {
  return (
    <VStack width="full" height="full" role="progressbar">
      {Array.from(Array(20).keys()).map((i) => (
        <Skeleton key={i} height="5%" width="full" />
      ))}
    </VStack>
  );
};

interface CodeEditorProps extends Omit<EditorProps, 'options'> {
  defaultLanguage: 'nlang' | 'txt';
  defaultValue: string;
  theme: string;
  readOnly?: boolean;
}

const CodeEditor = ({
  defaultLanguage,
  defaultValue,
  theme,
  readOnly = false,
  ...rest
}: CodeEditorProps) => {
  return (
    <Editor
      loading={<CodeEditorLoader />}
      defaultLanguage={defaultLanguage}
      defaultValue={defaultValue}
      theme={theme}
      options={{
        rulers: [],
        minimap: {
          enabled: false,
        },
        hideCursorInOverviewRuler: true,
        wordWrap: 'on',
        scrollbar: {
          vertical: 'hidden',
          horizontal: 'hidden',
        },
        overviewRulerLanes: 0,
        scrollBeyondLastLine: false,
        readOnly,
      }}
      {...rest}
    />
  );
};

export default memo(CodeEditor);
