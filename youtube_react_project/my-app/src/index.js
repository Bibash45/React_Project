import ReactDom from "react-dom/client"
import "./index.css"
import App from "./App.js";
const rootDiv = document.getElementById("root");
const reactRoot = ReactDom.createRoot(rootDiv);

reactRoot.render(<App />);