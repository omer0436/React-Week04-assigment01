import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FormSelect from "../components/FormSelect";

describe("FormSelect", () => {
  it("renders the options and sets the selected value correctly", () => {
    render(
      <FormSelect selectedCategory="math" setSelectedCategory={jest.fn()} />
    );
    const select = screen.getByLabelText("Choose a search criteria");
    expect(select.value).toBe("math");
    expect(screen.getByText("Math")).toBeInTheDocument();
    expect(screen.getByText("Javascript")).toBeInTheDocument();
    expect(screen.getByText("Teach")).toBeInTheDocument();
    expect(screen.getByText("Class")).toBeInTheDocument();
  });

  it("calls setSelectedCategory with the correct value when an option is selected", () => {
    const setSelectedCategory = jest.fn();
    render(
      <FormSelect
        selectedCategory="person"
        setSelectedCategory={setSelectedCategory}
      />
    );
    const select = screen.getByLabelText("Choose a search criteria");
    fireEvent.change(select, { target: { value: "math" } });
    expect(setSelectedCategory).toHaveBeenCalledWith("math");
  });
});
