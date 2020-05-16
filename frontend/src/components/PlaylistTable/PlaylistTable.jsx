import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";

import styles from "./playlistTable.module.css";

const columns = [
  { id: "songName", label: "Title", minWidth: 170 },
  { id: "artist", label: "Artist", minWidth: 170 },
  {
    id: "album",
    label: "Album",
    minWidth: 170,
  },
  {
    id: "duration",
    label: "Duration",
    minWidth: 170,
    align: "right",
  },
];

// const createData = (title, artist, album, length) => {
//   return { title, artist, album, length };
// };

// const rows = [
//   createData("I Forgot That You Existed", "Taylor Swift", "Lover", "2:51"),
//   createData("Cruel Summer", "Taylor Swift", "Lover", "2:58"),
//   createData("The Man", "Taylor Swift", "Lover", "3:10"),
//   createData("The Archer", "Taylor Swift", "Lover", "3:31"),
//   createData("I Think He Knows", "Taylor Swift", "Lover", "2:53"),
// ];

const PlaylistTable = ({ playlist, currentlyPlaying }) => {
  const convertToMin = (duration) => {
    const min = Math.floor(duration / 60000);
    let sec = Math.round((duration % 60000) / 1000);
    if (sec < 10) {
      sec = `0${sec}`;
    }

    return `${min}:${sec}`;
  };
  // console.log(playlist);
  return (
    <Paper classes={{ root: styles.root }}>
      <TableContainer classes={{ root: styles.container }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          classes={{
            stickyHeader: styles.stickyHeader,
            root: styles.root,
          }}
        >
          <TableHead classes={{ root: styles.root }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  classes={{
                    stickyHeader: styles.stickyHeader,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {playlist.length > 0
              ? playlist.map((song, i) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={`${song.songName}-key`}
                      classes={{
                        root:
                          currentlyPlaying === i
                            ? styles.currentlyPlaying
                            : null,
                      }}
                    >
                      <TableCell align="center">{song.songName}</TableCell>
                      <TableCell align="center">
                        {song.artist.map((artist) => (
                          <p className={styles.artistName} key={artist.name}>
                            {artist.name}
                          </p>
                        ))}
                      </TableCell>
                      <TableCell align="center">{song.album.name}</TableCell>
                      <TableCell align="right">
                        {convertToMin(song.duration)}
                      </TableCell>
                    </TableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

PlaylistTable.defaultProps = {
  playlist: [],
  currentlyPlaying: 0,
};

PlaylistTable.propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.object),
  currentlyPlaying: PropTypes.number,
};

export default PlaylistTable;
