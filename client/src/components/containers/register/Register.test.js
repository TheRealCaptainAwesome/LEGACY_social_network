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

  it("Updates component state on user input", () => {
    let nameInput = wrapper.find("input[name='name']");
    nameInput.props().onChange({
      target: { name: "name", value: "John" }
    });

    let emailInput = wrapper.find("input[name='email']");
    emailInput.props().onChange({
      target: { name: "email", value: "john@email.com" }
    });

    let passwordInput = wrapper.find("input[name='password']");
    passwordInput.props().onChange({
      target: { name: "password", value: "test123" }
    });

    expect(wrapper.state("name")).toBe("John");
    expect(wrapper.state("email")).toBe("john@email.com");
    expect(wrapper.state("password")).toBe("test123");
  });
});
