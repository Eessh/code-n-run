import { AnimatePresence } from 'framer-motion';
import { useEditorContext } from '../Editor';
import { useConsoleContext } from '../Console';
import { useThemeBoiiContext } from '../ThemeBoii';
import { getAPILanguageFromEditorMode } from '../Editor';
import { Modal, SidebarIcon } from "../AnimatedComponents";
import { Play, SettingsSVG, CodeforcesSVG } from "../Icons";
import Settings from '../Settings';
import CodeforcesMode from '../CodeforcesMode';

const SideBar = () => {
  const {
    code, mode,
    settingsVisible, setSettingsVisible,
    codeforcesModeVisible, setCodeforcesModeVisible
  } = useEditorContext();
  const { input, setOutput, setErrors } = useConsoleContext();
  const { theme } = useThemeBoiiContext();

  const runcode = () => {
    setOutput("fetching");
    setErrors("fetching");
    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        code: code,
        input: input,
        language: getAPILanguageFromEditorMode(mode)
      }),
    };
    fetch("https://code-execution-engine.herokuapp.com/run", options)
      .then(res => res.json())
      .then(
        (result) => {
          setOutput(result.output.stdout);
          if (result.output.error === null) {
            setErrors("No Errors 😎");
          }
          else {
            if (result.output.error.signal === "SIGTERM") {
              setErrors("TLE (Time Limit: 2s) 😕\nCheck for any infinite loops\nOr try some better algorithm 😅");
            }
            else if (result.output.error.signal === null) {
              setErrors("Compilation Error: 😕\n" + result.output.stderr);
            }
            else {
              setErrors("Runtime Error: 🥲\n" + result.output.error.signal);
            }
          }
        },
        (error) => {
          console.log("Error while fetching: ", error);
        });
  }

  // const handleRun = async (e) => {
  //   e.preventDefault();
  //   fetch("https://edit-and-run.herokuapp.com/execute", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       code: code,
  //       language: mode === "text/x-c++src" ? "cpp" : "py",
  //       input: input,
  //     })
  //   })
  //     .then((res) => { return res.json() })
  //     .then((body) => {
  //       if (body.error == null && body.output.slice(0, 12) != "./Playground") {
  //         console.log("body: ", body);
  //         setOutput(body.output);
  //         setErrors("No Errors 😎");
  //       }
  //       else {
  //         setErrors(body.output);
  //       }
  //     })
  //     .catch((error) => {
  //       setErrors(error);
  //     });
  // };

  return (
    <div
      className="flex-1 flex flex-col items-center rounded-xl Sidebar pt-2"
      style={{
        backgroundColor: theme.sidebar.backgroundColor,
      }}
    >
      {/* <a href="#">
        <Logo />
      </a> */}
      <SidebarIcon
        // onClick={handleRun}
        onClick={runcode}
        hoverStrokeColor={theme.sidebarIcon.playIcon.hover.color}
      >
        <Play />
      </SidebarIcon>
      <SidebarIcon
        onClick={() => setSettingsVisible(true)}
        hoverStrokeColor={theme.sidebarIcon.settingsIcon.hover.color}
      >
        <SettingsSVG />
      </SidebarIcon>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {
          settingsVisible && <Modal close={() => setSettingsVisible(false)}>
            <Settings />
          </Modal>
        }
      </AnimatePresence>
      <SidebarIcon
        onClick={() => setCodeforcesModeVisible(true)}
        hoverStrokeColor={theme.sidebarIcon.settingsIcon.hover.color}
      >
        <CodeforcesSVG />
      </SidebarIcon>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {
          codeforcesModeVisible && <Modal close={() => setCodeforcesModeVisible(false)}>
            <CodeforcesMode />
          </Modal>
        }
      </AnimatePresence>
    </div>
  )
}

export default SideBar;
