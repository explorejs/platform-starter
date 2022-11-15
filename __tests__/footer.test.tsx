import { render } from "@testing-library/react";
import Footer from "../src/components/Footer";

describe("Footer", () => {
  it("Has correct year", () => {
    // const MockFooter = () => <footer>2022</footer>;
    const {getByText} = render(<Footer />)
    // const { getByText } = render(<MockFooter />);
    expect(getByText(2022)).toBeTruthy();
  });
});
