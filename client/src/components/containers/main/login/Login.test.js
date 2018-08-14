import React from "react";
import { shallow } from "enzyme";

import Login from "./Login";

describe("Login component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("Renders a form", () => {
    expect(wrapper.find("form").exists()).toBe(true);
  });

  it("Contains email and password fields", () => {
    expect(wrapper.find("input[name='email']").exists()).toBe(true);
    expect(wrapper.find("input[name='password']").exists()).toBe(true);
  });

  it("Updates component state on user input", () => {
    let emailInput = wrapper.find("input[name='email']");
    emailInput.props().onChange({
      target: { name: "email", value: "john@email.com" }
    });

    let passwordInput = wrapper.find("input[name='password']");
    passwordInput.props().onChange({
      target: { name: "password", value: "test123" }
    });

    expect(wrapper.state("email")).toBe("john@email.com");
    expect(wrapper.state("password")).toBe("test123");
  });
});
