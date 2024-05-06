import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import WeMoviesContextProvider from "./context/we-movies-context.tsx";
import GlobalStyle from "./globalStyle.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WeMoviesContextProvider>
      <GlobalStyle />
      <App />
    </WeMoviesContextProvider>
  </React.StrictMode>
);
