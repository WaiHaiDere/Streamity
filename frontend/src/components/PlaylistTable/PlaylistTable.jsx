import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import styles from "./playlistTable.module.css";

const columns = [
  { id: "title", label: "Title", minWidth: 170 },
  { id: "artist", label: "Artist", minWidth: 170 },
  {
    id: "album",
    label: "Album",
    minWidth: 170,
  },
  {
    id: "length",
    label: "Length",
    minWidth: 170,
    align: "right",
  },
];

const createData = (title, artist, album, length) => {
  return { title, artist, album, length };
};

const rows = [
  createData("I Forgot That You Existed", "Taylor Swift", "Lover", "2:51"),
  createData("Cruel Summer", "Taylor Swift", "Lover", "2:58"),
  createData("The Man", "Taylor Swift", "Lover", "3:10"),
  createData("The Archer", "Taylor Swift", "Lover", "3:31"),
  createData("I Think He Knows", "Taylor Swift", "Lover", "2:53"),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "none",
  },
  container: {
    maxHeight: 250,
  },
});

const PlaylistTable = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table
          stickyHeader
          aria-label="sticky table"
          classes={{
            stickyHeader: styles.stickyHeader,
            root: styles.root,
          }}
        >
          <TableHead className={styles.root}>
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
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default PlaylistTable;
