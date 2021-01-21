import React from "react";
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Hero from "./Article";


test("renders correctly", () => {
  const component = mount(<Hero scrollPosition={0} />);
  expect(toJson(component)).toMatchSnapshot();
});
