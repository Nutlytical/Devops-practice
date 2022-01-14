import { render, screen } from "@testing-library/react";

import Card from "../Card";
import mockUser from "../../../__mocks__/user";

const mockSetSelectedUser = jest.fn();

describe("Card", () => {
  beforeEach(() => {
    render(<Card setSelectedUser={mockSetSelectedUser} user={mockUser} />);
  });

  test("", () => {});
});
