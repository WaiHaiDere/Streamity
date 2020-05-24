/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { createMount } from "@material-ui/core/test-utils";
import { render, screen } from "@testing-library/react";

import LeftDrawer from "../../../components/LeftDrawer/LeftDrawer";

describe("Left Drawer test", () => {
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it("Searched for song and gets search result", () => {
    const mockOnClick = jest.fn();
    const mockSearchResults = [
      {
        album: {
          name: "SIX60",
          images: [{ url: "hello.jpg" }],
        },
        artist: "SIX60",
        duration: "0",
        songName: "Catching Feelings",
        trackUri: "12345",
      },
    ];

    render(
      <LeftDrawer
        listOfSearchResults={mockSearchResults}
        handleChange={mockOnClick}
        handleClickSearch={mockOnClick}
        addToPlaylist={mockOnClick}
      />
    );
    expect(screen.queryByText("Catching Feelings")).toBeTruthy();
  });

  it("Searched for song and gets search result, but with one more search result", () => {
    const mockOnClick = jest.fn();
    const mockSearchResults = [
      {
        album: {
          name: "SIX60",
          images: [{ url: "hello.jpg" }],
        },
        artist: "SIX60",
        duration: "0",
        songName: "Catching Feelings",
        trackUri: "12345",
      },
      {
        album: {
          name: "Sam Smith's Album",
          images: [{ url: "reeeee.jpg" }],
        },
        artist: "Sam Smith",
        duration: "0",
        songName: "Latch",
        trackUri: "54321",
      },
    ];

    render(
      <LeftDrawer
        listOfSearchResults={mockSearchResults}
        handleChange={mockOnClick}
        handleClickSearch={mockOnClick}
        addToPlaylist={mockOnClick}
      />
    );
    expect(screen.queryByText("Catching Feelings")).toBeTruthy();
    expect(screen.queryByText("Latch")).toBeTruthy();
  });
});
