import { createRoot } from "react-dom/client";
import App from "./App";

// connecting React to the DOM
const root = createRoot(document.getElementById('root'));

root.render(<App/>)