import React, { useState } from "react";
import "./styles.css";
import Distributors from "./components/Distributors";
import BookDemo from "./components/BookDemo";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = useState("distributors");

  return (
    <div className="page">
      {page === "distributors" && <Distributors goTo={setPage} />}
      {page === "bookdemo" && <BookDemo goTo={setPage} />}
    </div>
  );
}