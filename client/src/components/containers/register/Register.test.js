import React from "react";
import { shallow } from "enzyme";

import Register from "./Register";

describe("Register", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Register />);
  });

  it("Renders a main element", () => {
    expect(wrapper.find("main").exists()).toBe(true);
  });

  it("Renders a form element", () => {
    expect(wrapper.find("form").exists()).toBe(true);
  });
});
