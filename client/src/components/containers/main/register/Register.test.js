import React from "react";
import { shallow } from "enzyme";

import Register from "./Register";

describe("Register component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Register />);
  });

  it("Renders a form", () => {
    expect(wrapper.find("form").exists()).toBe(true);
  });
});
