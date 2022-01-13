import { render, screen } from "@testing-library/react";

import ButtonGroup from "../ButtonGroup";

const mockHandleClick = jest.fn();

describe("ButtonGroup", () => {
  beforeEach(() => {
    render(<ButtonGroup handleClick={mockHandleClick} />);
  });

  test("", () => {});
});
