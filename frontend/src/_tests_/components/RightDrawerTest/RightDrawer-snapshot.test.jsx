import React from "react";
import renderer from "react-test-renderer";

import RightDrawer from "../../../components/RightDrawer/RightDrawer";

describe("Test left drawer snapshot", () => {
  it("left drawer renders correctly", () => {
    const mockOnClick = jest.fn();
    const mockChatMessages = [
      {
        user: "Ryan",
        message: "YEET",
      },
    ];
    const mockDetails = {
      username: "Ryan",
    };
    const mockChatMesage = "YEET";

    const mockPin = "123456";

    const tree = renderer
      .create(
        <RightDrawer
          chatMessage={mockChatMesage}
          chatMessageList={mockChatMessages}
          pin={mockPin}
          details={mockDetails}
          handleChatChange={mockOnClick}
          handleClickSend={mockOnClick}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
