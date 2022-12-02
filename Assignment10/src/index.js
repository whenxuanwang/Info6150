import react, { useState, useEffect } from "react";
import {createRoot} from "react-dom/client";
import {Covid} from "./components/index.js";

const App = () => {
    return <>
        <Covid />
    </>
}


const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<App />)