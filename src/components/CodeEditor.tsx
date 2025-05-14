import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { java } from "@codemirror/lang-java";
import { php } from "@codemirror/lang-php";
import { useCallback, useState } from "react";

export type LanguageKey = keyof typeof mapLanguageToExtension;

const mapLanguageToExtension = {
  javascript: javascript({ jsx: true }),
  typescript: javascript({ jsx: true, typescript: true }),
  python: python(),
  html: html(),
  java: java(),
  php: php(),
  css: css(),
};

export default function CodeEditor({ language }: { language?: LanguageKey }) {
  const [value, setValue] = useState("console.log('Hello, world!');\n");

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  return (
    <div className="w-full h-full bg-gray-200 text-left">
      <CodeMirror
        value={value}
        width="100%"
        height="100%"
        maxHeight="640px"
        theme="dark"
        onChange={onChange}
        extensions={[
          language
            ? mapLanguageToExtension[language]
            : mapLanguageToExtension.javascript,
        ]}
      />
    </div>
  );
}
