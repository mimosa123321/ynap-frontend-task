import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Hero from "./Hero";

test("renders correctly", () => {
  const component = mount(<Hero scrollPosition={0} />);
  expect(toJson(component)).toMatchSnapshot();
});

test("the opacity of hero container cover should be 1 when scrollPosition equal to 0", () => {
  const component = mount(<Hero scrollPosition={0} />);
  const child = component.find(".hero-container-cover");
  expect(child.get(0).props.style.opacity).toStrictEqual("1");
});

test("the opacity of hero container cover should be 0 when scrollPosition equal to 1000", () => {
  const component = mount(<Hero scrollPosition={1000} />);
  const child = component.find(".hero-container-cover");
  expect(child.get(0).props.style.opacity).toStrictEqual("0");
});
