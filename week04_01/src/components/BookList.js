import React from "react";

const BookList = ({ setSelectedCategory, books }) => {
  return (
    <div>
      <h1>Book List (10 pcs)</h1>
      <select
        className="form-select form-select-sm bg-dark text-white w-100 "
        aria-label="Choose a search criteria"
        onChange={(e) => {
          setSelectedCategory(e.target.value);
        }}
      >
        <option value="">Choose a search criteria</option>
        <option value="math" selected>
          Math
        </option>
        <option value="javascript">Javascript</option>
        <option value="teach">Teach</option>
        <option value="class">Class</option>
      </select>
      <div className="d-flex flex-wrap justify-content-center">
        {books?.items?.map((item) => {
          return (
            <div class="card mx-3 my-2" style={{ width: "18rem" }}>
              <img
                src={item?.volumeInfo?.imageLinks?.thumbnail}
                className="card-img-top m-auto p-3 "
                height="350px"
                alt={item?.volumeInfo?.title}
              />
              <div class="card-body">
                <h5 class="card-title">{item?.volumeInfo?.title}</h5>
              </div>
              <p class="list-group-item">Autors: {item?.volumeInfo?.authors}</p>
              <p class="list-group-item">
                Categories:
                <a
                  className="text-decoration-none"
                  href={item?.volumeInfo?.categories}
                >
                  {" "}
                  {item?.volumeInfo?.categories}
                </a>{" "}
              </p>
              <p class="list-group-item">
                Published: {item?.volumeInfo?.publishedDate}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookList;
