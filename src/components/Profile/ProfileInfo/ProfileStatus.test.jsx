import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state"),
    () => {
      const component = create(<ProfileStatus status="it.com" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("it.com");
    };
  test("after creation <input> should be displayed", () => {
    const component = create(<ProfileStatus status="it.com" />);
    const root = component.root();
    expect(() => {
      let input = root.findAllByType("input");
    }).toThrow();
  });
  test("after creation <span> should contains correct status", () => {
    const component = create(<ProfileStatus status="it.com" />);
    const root = component.root();
    let span = root.findAllByType("span");
    expect(span.children[0]).toBe("it.com ");
  });
  test("input should be displayed in editMode insted of span", () => {
    const component = create(<ProfileStatus status="it.com" />);
    const root = component.root();
    let span = root.findAllByType("span");
    span.props.onDoubleClick();
    let input = root.findAllByType("input");
    expect(input.props.value).toBe("it.com ");
  });
  test("callback should be called", () => {
    const mookCallback = jest.fn();
    const component = create(
      <ProfileStatus status="it.com" updateStatus={() => {}} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mookCallback.props.calls.length).toBe(1);
  });
});
