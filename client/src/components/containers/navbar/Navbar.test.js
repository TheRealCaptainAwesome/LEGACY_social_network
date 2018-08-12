import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

describe("Navbar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it("Renders a header:", () => {
    expect(wrapper.find("header").exists()).toBe(true);
  });

  it("Renders a logo & title section", () => {
    expect(
      wrapper
        .find("header")
        .children(".logoNtitle")
        .exists()
    ).toBe(true);
  });

  it("Renders a nav", () => {
    expect(
      wrapper
        .find("header")
        .children("nav")
        .exists()
    ).toBe(true);
  });

  it('Renders "Sign Up" & "Sign In" links', () => {
    expect(
      wrapper.containsAllMatchingElements([
        <Link to="/register">Sign Up</Link>,
        <Link to="/">Sign In</Link>
      ])
    ).toBe(true);
  });
});
