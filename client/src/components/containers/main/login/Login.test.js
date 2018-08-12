import React from "react";
import { shallow } from "enzyme";

import Login from "./Login";

describe("Register component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("Renders a form", () => {
    expect(wrapper.find("form").exists()).toBe(true);
  });
});
