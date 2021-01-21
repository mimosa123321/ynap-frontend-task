import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "./App";

test("renders correctly", () => {
  const component = mount(<App />);
  expect(component).toMatchSnapshot();
});
