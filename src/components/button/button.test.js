import React from "react";
import { shallow } from "enzyme";
import SharedButton from "./index";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});

const setUp = (props = {}) => {
  const component = shallow(<SharedButton {...props} />);
  return component;
};

describe("SharedButton Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Test test",
        emitEvent: () => {},
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = wrapper.find(".buttonComponent");
      expect(component.length).toBe(1);
    });
  });

  describe("Renders", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Example Button Text",
        emitEvent: mockFunc,
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("Should Render a button", () => {
      const button = wrapper.find(".buttonComponent");
      expect(button.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = wrapper.find(".buttonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
