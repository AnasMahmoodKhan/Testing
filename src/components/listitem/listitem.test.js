import React from "react";
import { shallow } from "enzyme";
import ListItem from "./index";

import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});

describe("ListItem Component", () => {
  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Title",
        desc: "Some text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Should renders without error", () => {
      const component = wrapper.find(".listItemComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a title", () => {
      const title = wrapper.find(".componentTitle");
      expect(title.length).toBe(1);
    });

    it("Should render a desc", () => {
      const desc = wrapper.find(".componentDesc");
      expect(desc.length).toBe(1);
    });
  });
});
