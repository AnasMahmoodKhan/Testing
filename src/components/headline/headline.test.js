import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = wrapper.find(".headlineComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a h1", () => {
      const component = wrapper.find(".header");
      expect(component.length).toBe(1);
    });
    it("Should render a desc", () => {
      const component = wrapper.find(".desc");
      expect(component.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should not render", () => {
      const component = wrapper.find(".headlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
