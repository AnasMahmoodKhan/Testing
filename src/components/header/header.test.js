import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = component.find(".headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = component.find(".logoIMG");
    expect(logo.length).toBe(1);
  });
});
