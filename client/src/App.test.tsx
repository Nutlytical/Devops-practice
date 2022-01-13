import { render, screen } from "@testing-library/react";
// import axios from "axios";
// import { mockUser } from "./__mocks__/mockData";

import App from "./App";

// jest.mock("axios");

describe("header renders with correct text", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should have title", () => {
    const title = screen.getByText(/In a galaxy far far away/i);

    expect(title).toBeInTheDocument();
  });

  it("should have subtitle", () => {
    const title = screen.getByText(/Start editing to see some magic happen!/i);

    expect(title).toBeInTheDocument();
  });

  // test("should fetch users", () => {
  // const users = [{ name: "Bob" }];
  // const resp = { data: users };
  // axios.get.mockResolvedValue(resp);
  // return Users.all().then((data) => expect(data).toEqual(users));
  // });
});
