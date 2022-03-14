import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Books from "./routes/books";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./routes/addBook";
import TopNav from "./components/TopNav";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/addBook" element={<AddBook />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
