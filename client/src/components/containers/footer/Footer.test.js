import React from "react";
import { shallow } from "enzyme";

import Footer from "./Footer";

describe("Footer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it("Renders a footer", () => {
    expect(wrapper.find("footer").exists()).toBe(true);
  });

  it("Renders a span:", () => {
    expect(
      wrapper
        .find("footer")
        .children("span")
        .exists()
    ).toBe(true);
  });
});
