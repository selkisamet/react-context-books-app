import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import BookContextProvider from "./context/BookContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookContextProvider>
      <App />
    </BookContextProvider>
  </React.StrictMode>
);
