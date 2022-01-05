import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SocketContext } from "../Context";
import {Button,Container,Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    width: "580px",
    margin: "5px 0px",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    }
  }
}));

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <Paper elevation={10}>
          {call.isReceivingCall && !callAccepted && (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <h1>{call.name} is calling:</h1>
              <Button variant="contained" color="primary" onClick={answerCall}>
                Answer
              </Button>
            </div>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default Notifications;
