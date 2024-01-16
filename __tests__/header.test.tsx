import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MantineProvider } from "@mantine/core";
import Header from "../components/header";

const renderWithMantineProvider = (component: any) => {
  return render(<MantineProvider>{component}</MantineProvider>);
};

describe("Header Component", () => {
  // Test 1: Component renders
  it("renders without crashing", () => {
    renderWithMantineProvider(<Header onSearchIconClick={() => {}} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  // Test 2: Burger menu interaction
  it("toggles the drawer when the burger menu is clicked", () => {
    renderWithMantineProvider(<Header onSearchIconClick={() => {}} />);
    const burgerMenu = screen.getByRole("button", { name: /burger/i });
    fireEvent.click(burgerMenu);
   
    expect(screen.getByText("Mazaady Menu")).toBeInTheDocument();
  });

  // Test 3: Links are correct
  it("contains the correct links", () => {
    renderWithMantineProvider(<Header onSearchIconClick={() => {}} />);
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Blog").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Gifts").closest("a")).toHaveAttribute("href", "/");
  });
});
