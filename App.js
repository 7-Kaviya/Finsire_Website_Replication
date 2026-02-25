import React, { useState } from "react";
import "./styles.css";
import Home from "./components/Home";
import Distributors from "./components/Distributors";
import BookDemo from "./components/BookDemo";
import AboutUs from "./components/AboutUS";
import Careers from "./components/Careers";
import Loan from "./components/Loan";
import Blogs from "./components/Blogs";
import Media from "./components/Media";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="page">
      {page === "home" && <Home goTo={setPage} />}
      {page === "distributors" && <Distributors goTo={setPage} />}
      {page === "bookdemo" && <BookDemo goTo={setPage} />}
      {page === "aboutus" && <AboutUs goTo={setPage} />}
      {page === "careers" && <Careers goTo={setPage} />}
      {page === "loan" && <Loan goTo={setPage} />}
      {page === "blogs" && <Blogs goTo={setPage} />}
      {page === "media" && <Media goTo={setPage} />}
    </div>
  );
}