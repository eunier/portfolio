/* @refresh reload */
import { render } from "solid-js/web";
import App from "./app.component";
import "./index.scss";

const root = document.getElementById("root");

// biome-ignore lint/style/noNonNullAssertion: <explanation>
render(() => <App />, root!);
