const EditorModes = {
  c: {
    editorModeName: "text/x-csrc",
    languageName: "C",
  },
  cpp: {
    editorModeName: "text/x-c++src",
    languageName: "C++",
  },
  python: {
    editorModeName: "python",
    languageName: "Python",
  },
};

const getLanguageNames = () => {
  let names = [];
  Object.values(EditorModes).forEach((value) => names.push(value.languageName));
  return names;
};

const getLanguageFromEditorMode = (mode) => {
  switch (mode) {
    case "text/x-csrc":
      return "C";
    case "text/x-c++src":
      return "C++";
    case "python":
      return "Python";
    default:
      throw new Error(`${mode} is not supported!!!`);
  };
};

const getEditorModeFromLanguage = (language) => {
  switch (language) {
    case "C":
      return "text/x-csrc";
    case "C++":
      return "text/x-c++src";
    case "Python":
      return "python";
    default:
      throw new Error(`${language} is not supported!!!`);
  };
};

const getAPILanguageFromEditorMode = (mode) => {
  switch (mode) {
    case "text/x-csrc":
      return "c";
    case "text/x-c++src":
      return "cpp";
    case "python":
      return "py";
    default:
      throw new Error(`${mode} is not supported!!!`);
  };
};

export {
  EditorModes,
  getLanguageNames,
  getLanguageFromEditorMode,
  getEditorModeFromLanguage,
  getAPILanguageFromEditorMode
};