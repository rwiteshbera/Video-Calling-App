import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { SocketContext } from "../Context";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
}));

function VideoPlayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {/* Our Video  */}
      {stream && (
        <Paper classes={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom textAlign="center">
              {name || "You"}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
      {/* User's Video  */}
      {callAccepted && !callEnded && (
        <Paper classes={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom textAlign="center">
              {call.name || "Person 2"}
            </Typography>
            <video
              playsInline
              muted
              ref={userVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
}

export default VideoPlayer;
