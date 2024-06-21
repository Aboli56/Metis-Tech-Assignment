import {All, IAllProps} from "@components/All/All";
import React from "react";
import renderer from "react-test-renderer";

describe("All component", () => {
  test("should render component properly", () => {
    // given
    const dummyComponentProps: IAllProps = {
      currentSort: undefined,
      sortAsc: false,
      countries: [],
      setCurrentSort: jest.fn(),
    };

    // when
    const componentRenderer = renderer.create(<All {...dummyComponentProps} />);
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});
