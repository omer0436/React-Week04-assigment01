import BookList from "./components/BookList";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("person");

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${selectedCategory}&key=AIzaSyD8MC2iPpUbUjw8BxkB5XXvEBD5yiFto2s`
      );
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, [selectedCategory]);
  return (
    <div className="App container">
      <div className="row">
        <BookList
          books={books}
          setSelectedCategory={setSelectedCategory}
        ></BookList>
      </div>
    </div>
  );
}

export default App;
