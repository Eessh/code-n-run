const EditorModes = {
  c: {
    languageName: "C",
    editorModeName: "text/x-csrc",
    pistonRuntimeName: "c",
    rapidAPILanguageChoice: 6,
  },
  cpp: {
    languageName: "C++",
    editorModeName: "text/x-c++src",
    pistonRuntimeName: "cpp",
    rapidAPILanguageChoice: 7,
  },
  rust: {
    languageName: "Rust",
    editorModeName: "text/x-rustsrc",
    pistonRuntimeName: "rs",
    rapidAPILanguageChoice: 46,
  },
  javascript: {
    languageName: "Javascript",
    editorModeName: "text/javascript",
    pistonRuntimeName: "js",
    rapidAPILanguageChoice: 17,
  },
  // typescript: {
  //   language: "Typescript",
  //   editorModeName: "text/x-typescript",
  //   pistonRuntimeName: "ts",
  //   rapidAPILanguageChoice: 60,
  // },
  python: {
    languageName: "Python",
    editorModeName: "text/x-python",
    pistonRuntimeName: "py",
    rapidAPILanguageChoice: 5,
  },
  go: {
    languageName: "Go",
    editorModeName: "text/x-go",
    pistonRuntimeName: "go",
    rapidAPILanguageChoice: 20,
  },
  // java: {
  //   languageName: "Java",
  //   editorModeName: "text/x-java",
  //   pistonRuntimeName: "java",
  //   rapidAPILanguageChoice: 4,
  // },
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

const getRapidApiLanguageChoiceFromEditorMode = (mode) => {
  for (const { editorModeName, rapidAPILanguageChoice } of Object.values(EditorModes)) {
    if (editorModeName === mode)
      return rapidAPILanguageChoice;
  }
  throw new Error(`Mode: ${mode} is node supported!!!`);
};

export {
  EditorModes,
  getLanguageNames,
  getLanguageFromEditorMode,
  getEditorModeFromLanguage,
  getAPILanguageFromEditorMode,
  getRapidApiLanguageChoiceFromEditorMode
};