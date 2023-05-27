import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Counter from "./components/Counter";
Enzyme.configure({ adapter: new Adapter() });

describe("The Text", () => {
  it("should show the text", () => {
    const toggleInstance = shallow(<Counter />);
    const element = toggleInstance.find("div div");
    expect(element.text()).toBe("This is count : 0");
  });
});

describe("The Button", () => {
  it("should manipulate the text", () => {
    const toggleInstance = shallow(<Counter />);
    const toggleButton = toggleInstance.find("div button.inc");
    toggleButton.simulate("click");
    const element = toggleInstance.find("div div");
    expect(element.text()).toBe("This is count : 1");
  });
});

describe("The Button", () => {
  it("should manipulate the text", () => {
    const toggleInstance = shallow(<Counter />);
    const toggleButton = toggleInstance.find("div button.dec");
    toggleButton.simulate("click");
    const element = toggleInstance.find("div div");
    expect(element.text()).toBe("This is count : -1");
  });
});
