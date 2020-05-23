/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { createMount } from "@material-ui/core/test-utils";
import { render, screen } from "@testing-library/react";

import RightDrawer from "../../../components/RightDrawer/RightDrawer";

describe("Right Drawer test", () => {
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it("Check for displaying chat messages", () => {
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

    render(
      <RightDrawer
        chatMessage={mockChatMesage}
        chatMessageList={mockChatMessages}
        pin={mockPin}
        details={mockDetails}
        handleChatChange={mockOnClick}
        handleClickSend={mockOnClick}
      />
    );
    expect(screen.queryByText("YEET")).toBeTruthy();
  });

  it("Check for displaying chat messages with new chat message", () => {
    const mockOnClick = jest.fn();
    const mockChatMessages = [
      {
        user: "Ryan",
        message: "YEET",
      },
      {
        user: "Tyger",
        message: "Why are you the way you are?",
      },
    ];
    const mockDetails = {
      username: "Ryan",
    };
    const mockChatMesage = "YEET";

    const mockPin = "123456";

    render(
      <RightDrawer
        chatMessage={mockChatMesage}
        chatMessageList={mockChatMessages}
        pin={mockPin}
        details={mockDetails}
        handleChatChange={mockOnClick}
        handleClickSend={mockOnClick}
      />
    );
    expect(screen.queryByText("YEET")).toBeTruthy();
    expect(screen.queryByText("Why are you the way you are?")).toBeTruthy();
  });
});
