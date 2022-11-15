import { render } from "@testing-library/react";
import Header from "../src/components/Header";

describe("Header", () => {
  it("Looks Great", () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});
