import Head from 'next/head'
import Model from "../components/Model";
import { ThemeBoiiContextProvider } from '../components/ThemeBoii';
import { EditorContextProvider } from "../components/Editor";
import { ConsoleContextProvider } from "../components/Console";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Code & Run</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <ThemeBoiiContextProvider>
              <EditorContextProvider>
                <ConsoleContextProvider>
                  <Model />
                </ConsoleContextProvider>
              </EditorContextProvider>
          </ThemeBoiiContextProvider>
      </main>
    </div>
  );
};
