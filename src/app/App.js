import React, { useEffect, useState } from "react";
import Headings from "./components/Headings";
import Rows from "./components/Rows";
import PropTypes from "prop-types";
import { format } from "timeago.js";

const App = ({ title, headings }) => {
  const [books, setBooks] = useState([]);

  const formatData = (books) =>
    books.map((book, i) => ({
      when: format(book.timestamp),
      who: book.author.key,
      description: book.comment,
    }));

  useEffect(() => {
    setInterval(async () => {
      const res = await fetch(
        "http://openlibrary.org/recentchanges.json?limit=10"
      );
      const data = await res.json();
      const formatedData = formatData(data);
      setBooks(formatedData);
    }, 3000);
  }, []);

  return (
    <div className="container p-4">
      <h1 className="display-2 mb-3">{title}</h1>
      <table className="table table-bordered table-hover table-striped">
        <Headings headings={headings} />
        <Rows data={books} />
      </table>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  headings: PropTypes.array.isRequired,
};

export default App;
