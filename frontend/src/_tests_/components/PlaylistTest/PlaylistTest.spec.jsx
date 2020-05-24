/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { createMount } from "@material-ui/core/test-utils";
import { render, screen } from "@testing-library/react";

import PlaylistTable from "../../../components/PlaylistTable/PlaylistTable";

describe("Playlist table test", () => {
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it("test playlist added to playlist table", () => {
    const mockDetails = [
      {
        songName: "Rivers",
        duration: 0,
        artist: [
          {
            name: "SIX60",
          },
        ],
        album: {
          name: "SIX60",
        },
      },
    ];

    render(<PlaylistTable playlist={mockDetails} />);
    expect(screen.queryByText("Rivers")).toBeTruthy();
  });

  it("test more songs to playlist", () => {
    const mockDetails = [
      {
        songName: "Rivers",
        duration: 0,
        artist: [
          {
            name: "SIX60",
          },
        ],
        album: {
          name: "SIX60",
        },
      },
      {
        songName: "Catching Feelings",
        duration: 0,
        artist: [
          {
            name: "SIX60",
          },
        ],
        album: {
          name: "Catching Feelings with SIX60",
        },
      },
    ];

    render(<PlaylistTable playlist={mockDetails} />);
    expect(screen.queryByText("Rivers")).toBeTruthy();
    expect(screen.queryByText("Catching Feelings")).toBeTruthy();
  });
});
