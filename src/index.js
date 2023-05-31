import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BooksProvider } from "./context/book_context";

ReactDOM.render(
  <BooksProvider>
    <App />
  </BooksProvider>,

  document.getElementById("root")
);
