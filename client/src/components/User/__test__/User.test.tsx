import { render, screen } from "@testing-library/react";

import User from "../User";
import mockUser from "../../../__mocks__/user";

describe("User", () => {
  beforeEach(() => {
    render(<User user={mockUser} />);
  });

  test("", () => {});
});
