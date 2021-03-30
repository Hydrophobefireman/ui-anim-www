import "./App.css";

import { VNode, render } from "@hydrophobefireman/ui-lib";

import { RouteLoader } from "./components/RouteLoader";
import { Header } from "./components/Header/Header";

function App(): VNode {
  return (
    <>
      <Header />
      <main>
        <RouteLoader />
      </main>
    </>
  );
}

render(<App />, document.getElementById("app-mount"));
