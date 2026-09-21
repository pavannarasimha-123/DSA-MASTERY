import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { Play, Send, RotateCcw, Copy, Check, Sun, Moon } from "lucide-react";

export default function MonacoEditorWrapper({
  code,
  onChange,
  onRun,
  onSubmit,
  onReset,
  isRunning = false,
  isSubmitting = false
}) {
  const editorRef = useRef(null);
  const [theme, setTheme] = useState("vs-light");
  const [copied, setCopied] = useState(false);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;

    // Add Ctrl+Enter shortcut to Run Code
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      if (onRun && !isRunning) onRun();
    });
  }

  function handleCopy() {
    if (editorRef.current) {
      navigator.clipboard.writeText(editorRef.current.getValue());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  }

  function handleFormat() {
    if (editorRef.current) {
      editorRef.current.getAction("editor.action.formatDocument")?.run();
    }
  }

  return (
    <div className="flex flex-col h-full border border-slate-200 rounded overflow-hidden bg-white">
      {/* Editor Minimalist Header Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border-b border-slate-200 text-xs">
        <div className="flex items-center space-x-2 font-medium text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Solution.java</span>
        </div>

        <div className="flex items-center space-x-1.5">
          <button
            onClick={() => setTheme(theme === "vs-light" ? "vs-dark" : "vs-light")}
            className="p-1.5 rounded hover:bg-slate-200 text-slate-600 transition-colors"
            title="Toggle Editor Dark/Light Mode"
          >
            {theme === "vs-light" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded hover:bg-slate-200 text-slate-600 transition-colors"
            title="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={onReset}
            className="p-1.5 rounded hover:bg-slate-200 text-slate-600 transition-colors"
            title="Reset Starter Code"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Monaco Code Editor */}
      <div className="flex-1 min-h-[360px]">
        <Editor
          height="100%"
          language="java"
          theme={theme}
          value={code}
          onChange={onChange}
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 4,
            wordWrap: "on",
            renderLineHighlight: "all",
            fontFamily: "JetBrains Mono, Menlo, Monaco, Consolas, monospace",
          }}
        />
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border-t border-slate-200 text-xs">
        <span className="text-slate-500 hidden sm:inline">
          Tip: Press <kbd className="px-1.5 py-0.5 border border-slate-300 rounded bg-white font-mono text-[10px]">Ctrl+Enter</kbd> to Run
        </span>

        <div className="flex items-center space-x-2 ml-auto">
          <button
            onClick={onRun}
            disabled={isRunning || isSubmitting}
            className="flex items-center space-x-1 px-3 py-1.5 rounded border border-slate-300 hover:border-slate-400 bg-white text-slate-700 font-medium transition-colors disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 text-slate-600" />
            <span>{isRunning ? "Running..." : "Run Code"}</span>
          </button>

          <button
            onClick={onSubmit}
            disabled={isRunning || isSubmitting}
            className="flex items-center space-x-1 px-4 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors disabled:opacity-50 shadow-sm"
          >
            <Send className="w-3.5 h-3.5 text-white" />
            <span>{isSubmitting ? "Evaluating..." : "Submit Solution"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
