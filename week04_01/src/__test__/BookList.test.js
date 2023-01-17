import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import BookList from "../components/BookList";

test("renders BookList component", () => {
  render(<BookList />);
  const headerElement = screen.getByText(/Book List/i);
  expect(headerElement).toBeInTheDocument();
});

test("fetches and displays books when category is selected", async () => {
  render(<BookList />);
  const categorySelect = screen.getByText(/Choose a search criteria/i);
  fireEvent.change(categorySelect, { target: { value: "person" } });
  const bookList = await waitFor(() => screen.findByText(/Book List/i));
  expect(bookList).toHaveTextContent(/Book List/i);
});
