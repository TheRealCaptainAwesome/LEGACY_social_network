import React from "react";
import { shallow } from "enzyme";

import Navbar from "./Navbar";

describe("Navbar", () => {
  it("Renders a header:", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find("header").exists()).toBe(true);
  });

  it("Renders a logo & title section", () => {
    const wrapper = shallow(<Navbar />);
    expect(
      wrapper
        .find("header")
        .children(".logoNtitle")
        .exists()
    ).toBe(true);
  });

  it("Renders a nav", () => {
    const wrapper = shallow(<Navbar />);
    expect(
      wrapper
        .find("header")
        .children("nav")
        .exists()
    ).toBe(true);
  });
});
