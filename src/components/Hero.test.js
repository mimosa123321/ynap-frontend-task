import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Hero from "./Hero";

test("renders correctly", () => {
  const component = mount(<Hero scrollPosition={0} />);
  expect(toJson(component)).toMatchSnapshot();
});

test("the opacity of hero container cover should be 1 when scrollPosition is 0", () => {
  const component = mount(<Hero scrollPosition={0} />);
  const child = component.find(".hero-container-cover");
  expect(child.get(0).props.style.opacity).toStrictEqual("1");
});

test("the opacity of hero container cover should be 0 when scrollPosition is 1000", () => {
  const component = mount(<Hero scrollPosition={1000} />);
  const child = component.find(".hero-container-cover");
  expect(child.get(0).props.style.opacity).toStrictEqual("0");
});

test("the bg position of hero container should be 0px when mobile view is true", () => {
  jest.mock('./../utils/utils', () => {
    return {
      isMobileView: () => true
    }
  });
  const component = mount(<Hero scrollPosition={0} />);
  const child = component.find(".hero-container");
  expect(child.get(0).props.style.backgroundPositionY).toStrictEqual("0px");
});

test("the bg position of hero container should be -600px when scroll position is 3000", () => {
  jest.mock('./../utils/utils', () => {
    return {
      isMobileView: () => false
    }
  });
  const component = mount(<Hero scrollPosition={3000} />);
  const child = component.find(".hero-container");
  expect(child.get(0).props.style.backgroundPositionY).toStrictEqual("-600px");
});

test("the translate Y of hero contents should be -600px when scroll position is 3000", () => {
  const component = mount(<Hero scrollPosition={3000} />);
  const child = component.find(".contents");
  expect(child.get(0).props.style.transform).toStrictEqual("translate3d(0, 30px, 0)");
});
