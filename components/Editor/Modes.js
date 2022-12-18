const EditorModes = {
  c: {
    languageName: "C",
    editorModeName: "text/x-csrc",
    pistonRuntimeName: "c",
  },
  cpp: {
    languageName: "C++",
    editorModeName: "text/x-c++src",
    pistonRuntimeName: "cpp",
  },
  // java: {
  //   languageName: "Java",
  //   editorModeName: "text/x-java",
  //   pistonRuntimeName: "java",
  // },
  python: {
    languageName: "Python",
    editorModeName: "text/x-python",
    pistonRuntimeName: "py",
  },
  rust: {
    languageName: "Rust",
    editorModeName: "text/x-rustsrc",
    pistonRuntimeName: "rs",
  }
};

const getLanguageNames = () => {
  let names = [];
  Object.values(EditorModes).forEach(({ languageName }) => names.push(languageName));
  return names;
};

const getLanguageFromEditorMode = (mode) => {
  for (const { editorModeName, languageName } of Object.values(EditorModes)) {
    if (editorModeName === mode)
      return languageName;
  }
  throw new Error(`Mode: ${mode} is not supported`);
};

const getEditorModeFromLanguage = (language) => {
  for (const { editorModeName, languageName } of Object.values(EditorModes)) {
    if (languageName === language)
      return editorModeName;
  }
  throw new Error(`Language: ${language} is not supported`);
};

const getAPILanguageFromEditorMode = (mode) => {
  for (const { editorModeName, pistonRuntimeName } of Object.values(EditorModes)) {
    if (editorModeName === mode)
      return pistonRuntimeName;
  }
  throw new Error(`Mode: ${mode} is not supported!!!`);
};

export {
  EditorModes,
  getLanguageNames,
  getLanguageFromEditorMode,
  getEditorModeFromLanguage,
  getAPILanguageFromEditorMode
};