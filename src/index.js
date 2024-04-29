import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import BookContextProvider from "./context/BookContext";
import ThemeContextProvider from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </ThemeContextProvider>

  </React.StrictMode>
);
