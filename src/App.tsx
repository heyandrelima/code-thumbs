import CodeEditor, { type LanguageKey } from "./components/CodeEditor";
import "./App.css";
import LanguageSelector from "./components/LanguageSelector";
import { useRef, useState } from "react";
import Window from "./components/Window";
import saveHTMLToImg from "./lib/saveHTMLToImg";

function App() {
  const windowRef = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = useState<LanguageKey>("javascript");

  return (
    <>
      <h1 className="text-6xl font-bold">Code Thumbs</h1>
      <div className="mt-4 min-w-[640px] p-6">
        <div className="mb-2">
          <LanguageSelector onChange={(newLang) => setLanguage(newLang)} />
        </div>
        <Window ref={windowRef}>
          <CodeEditor language={language} />
        </Window>
        <button className="mt-4" onClick={() => saveHTMLToImg(windowRef)}>Save image</button>
      </div>
    </>
  );
}

export default App;
