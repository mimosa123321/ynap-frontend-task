import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

import Article from "./Article";

test("renders correctly", () => {
  const component = mount(<Article scrollPosition={0} />);
  expect(toJson(component)).toMatchSnapshot();
});