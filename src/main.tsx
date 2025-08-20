import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <div>Hello F&B Mini App</div>;
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
