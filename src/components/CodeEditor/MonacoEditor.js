// src/components/CodeEditor.js
import React, {useEffect, useState} from 'react';
import Editor, {loader} from "@monaco-editor/react";
import './CodeEditor.css';
const CodeEditor = ({ onSubmit }) => {
    const [fatherCode, setFatherCode] = useState('');
    const [mainCode, setMainCode] = useState('');

    useEffect(() => {
        loader.init().then(monaco => {
            monaco.editor.defineTheme('gemy-theme', {
                base: 'vs-dark',
                inherit: true,
                rules: [],
                colors: {
                    'editor.background': '#00000000',
                }
            });
        });
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(fatherCode, mainCode);
    };

    const editorDidMount = (editor, monaco) => {
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: false,
        });
        monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.Latest,
            allowNonTsExtensions: true,
        });
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className='code-area flex-c bg'>
            <h2>Father.java</h2>
                <Editor
                    height="90vh"
                    defaultLanguage="java"
                    defaultValue="// some comment"
                    theme="gemy-theme"
                    onMount={editorDidMount}
                    options={{
                        quickSuggestions: true,
                        suggestOnTriggerCharacters: true,
                        acceptSuggestionOnCommitCharacter: true,
                        acceptSuggestionOnEnter: "on",
                        suggestSelection: "first",
                        suggest: {
                            insertMode: "insert",
                            filterGraceful: true,
                            showIcons: true,
                            maxVisibleSuggestions: 10,
                            preview: true,
                            previewMode: "prefix",
                            shareSuggestSelections: true,
                            snippetsPreventQuickSuggestions: false,
                        },
                    }}
                    onChange={(value) => setFatherCode(value)}
                />
            <button type="submit" className='compile-button'>Compile & Run</button>
            </div>
        </form>
    );
};

export default CodeEditor;
