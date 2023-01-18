import { useState } from "react";
import "../Style/addBook.css";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
  //title,categories,authors,pageCount,shortDescription.longDescription,thumbnailUrl
  let [title, setTitle] = useState("");
  let [categories, setCategories] = useState("");
  let [authors, setAuthors] = useState("");
  let [pageCount, setPageCount] = useState("");
  let [shortDescription, setShortDescription] = useState("");
  let [longDescription, setLongDescription] = useState("");
  let [thumbnailUrl, setThumbnailUrl] = useState("");

  let reset = () => {
    setTitle("");
    setCategories("");
    setAuthors("");
    setPageCount("");
    setShortDescription("");
    setLongDescription("");
    setThumbnailUrl("");
  };
  let handleSubmit = (e) => {
    e.preventDefault(); //use to prevent from reloading while submit
    //data to the server
    let bookData = {
      title,
      categories,
      authors,
      pageCount,
      shortDescription,
      longDescription,
      thumbnailUrl,
    };

    //post data to server
    fetch(`http://localhost:4000/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookData)
    });
    alert("book added successfully......!!")
    navigate('/admin/book-list')
  };
  let navigate = useNavigate();
  return (
    <div className="addBook">
      <h1>ADD A BOOK</h1>
      <div className="form4">
        <form action="" onSubmit={handleSubmit}>
          <div className="title">
            {/* <label htmlFor="">Title:</label> */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title of the Book"
              required
            />
          </div>
          <div className="categories">
            {/* <label htmlFor="">Categories:</label> */}
            <input
              type="text"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              placeholder="categories of the Book"
            />
          </div>
          <div className="authors">
            {/* <label htmlFor="">Authors:</label> */}
            <input
              type="text"
              value={authors}
              onChange={(e) => setAuthors(e.target.value)}
              placeholder="authors of the Book"
            />
          </div>
          <div className="pageCount">
            {/* <label htmlFor="">PageCount:</label> */}
            <input
              type="number"
              value={pageCount}
              onChange={(e) => setPageCount(e.target.value)}
              placeholder="pageCount of the Book"
            />
          </div>
          <div className="shortDescription">
            {/* <label htmlFor="">shortDescription:</label> */}
            <textarea
              cols="36"
              rows="3"
              placeholder="shortDescription of the Book"
              required
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="longDescription">
            {/* <label htmlFor="">longDescription:</label> */}
            <textarea
              cols="36"
              rows="3"
              placeholder="longDescription of the Book"
              required
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="thumbnailUrl">
            {/* <label htmlFor="">thumbnailUrl:</label> */}
            <input
              type="text"
              value={thumbnailUrl}
              onChange={(e) => setThumbnailUrl(e.target.value)}
              placeholder="ThumbnailUrl of the Book"
            />
          </div>
          <button type="submit">ADD BOOK</button>
          <button type="reset" onClick={reset}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;