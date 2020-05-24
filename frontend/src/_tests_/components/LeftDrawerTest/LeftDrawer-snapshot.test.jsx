import React from "react";
import renderer from "react-test-renderer";

import LeftDrawer from "../../../components/LeftDrawer/LeftDrawer";

describe("Test left drawer snapshot", () => {
  it("left drawer renders correctly", () => {
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

    const tree = renderer
      .create(
        <LeftDrawer
          listOfSearchResults={mockSearchResults}
          handleChange={mockOnClick}
          handleClickSearch={mockOnClick}
          addToPlaylist={mockOnClick}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
