import React from "react";
import { shallow } from "enzyme";

import Main from "./Main";

describe("Main container component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it("Render a 'main' html-element", () => {
    expect(wrapper.find("main").exists()).toBe(true);
  });

  it("Renders a Register-component", () => {
    expect(wrapper.find("Register").exists()).toBe(true);
  });
});
